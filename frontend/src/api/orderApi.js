import { apiClient } from "./client";


export async function getPackageOrders() {
  const response = await apiClient.get("/package-orders/")
  return response.data
}


export async function createPackageOrder(orderData){
  const response = await apiClient.post("/package-orders/", orderData)
  return response.data
}