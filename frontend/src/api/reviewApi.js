import { apiClient } from "./client.js";

export async function getListReview(){
    const response = await apiClient.get("/reviews/");
    return response.data
}

export async function createReview(reviewData){
    const response = await apiClient.post("/reviews/", reviewData);
    return response.data
}
