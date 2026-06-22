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

export async function logoutUser(refreshToken) {
  const response = await apiClient.post("/users/logout/", {
    refresh: refreshToken,
  })

  return response.data
}

export async function refreshToken(refreshToken) {
  const response = await apiClient.post("/users/token/refresh/", {
    refresh: refreshToken,
  })

  return response.data
}