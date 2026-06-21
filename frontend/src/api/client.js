import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
});

apiClient.interceptors.request.use((config)=>{
  const accessToken = localStorage.getItem("accessToken")

  if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem("refreshToken")

        if (!refreshToken) {
          throw new Error("No refresh token")
        }

        const response = await axios.post(
          'http://127.0.0.1:8000/api/users/token/refresh/',
          {
            refresh: refreshToken,
          }
        )

        const newAccessToken = response.data.access

        localStorage.setItem("accessToken", newAccessToken)

        if (response.data.refresh) {
          localStorage.setItem("refreshToken", response.data.refresh)
        }

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return apiClient(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")

        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)