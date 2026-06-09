import { apiClient } from "./client";

export async function getAboutAiBusiness(){
    const response = await apiClient.get("/about-aibusiness/")
    return response.data
}
