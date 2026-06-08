import { apiClient } from "./client.js"

export async function getTrainingPrograms(){
    const response = await apiClient.get("/training/")
    return response.data
}

export async function getTrainingProgramBySlug(slug){
    const response = await apiClient.get(`/training/${slug}/`)
    return response.data
}
