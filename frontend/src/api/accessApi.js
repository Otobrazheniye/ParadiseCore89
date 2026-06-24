import { apiClient } from "./client";

export async function getUserPackageAccesses() {
    const response = await apiClient.get("/user-package-access/")
    return response.data
}

export async function getUserTrainingAccesses() {
    const response = await apiClient.get("/user-training-access/")
    return response.data
}

export async function getUserServiceAccesses() {
    const response = await apiClient.get("/user-service-access/")
    return response.data
}