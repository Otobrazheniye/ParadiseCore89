import { apiClient } from "./client";

export async function createContactRequest(contactData){
    const response = await apiClient.post('/contact-request/', contactData);
    return response.data;
}
