import { apiClient } from "./client";

export async function getUserPackageAccesses() {
    const response = await apiClient.get("/user-package-accesses/")
    return response.data
}

export async function getUserTrainingAccesses() {
    const response = await apiClient.get("/user-training-accesses/")
    return response.data
}

export async function getUserServiceAccesses() {
    const response = await apiClient.get("/user-service-accesses/")
    return response.data
}