import { apiClient } from "./client.js";

export async function getServices(){
    const response = await apiClient.get("/services/")
    return response.data
}


export async function getServiceBySlug(slug) {
  const response = await apiClient.get(`/services/${slug}/`)
  return response.data
}


export async function getPackagePlans(){
  const response = await apiClient.get("/package-plans/")
  return response.data
}
