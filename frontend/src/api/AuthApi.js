import { apiClient } from "./client"

export async function registerUser(userData) {
  const response = await apiClient.post("/users/", userData)
  return response.data
}

export async function loginUser(loginData) {
  const response = await apiClient.post("/users/login/", loginData)

  localStorage.setItem("accessToken", response.data.access)
  localStorage.setItem("refreshToken", response.data.refresh)

  return response.data
}
  
export async function getCurrentUser() {
  const response = await apiClient.get("/users/me/")
  return response.data
}

export async function logoutUser() {
  const refreshToken = localStorage.getItem("refreshToken")
  try {
    if(!refreshToken){
      console.warn("No refresh token found")
      return
    }

    const response = await apiClient.post("/users/logout/", {
    refresh: refreshToken,  
    })  
    return response.data
  }
  finally {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  }
}

export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken")

  const response = await apiClient.post("/users/token/refresh/", {
    refresh: refreshToken,
  })

  localStorage.setItem("accessToken", response.data.access)

  if (response.data.refresh) {
    localStorage.setItem("refreshToken", response.data.refresh)
  }

  return response.data
}