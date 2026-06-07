import { createReview } from "../api/reviewApi";

export function renderAIBusinessReview(){
    return `
        <section class="reviews-section">
            <div class="reviews-grid" id="reviews-grid"></div>
        </section>
        <form class="review-form" id="review-form">
            <input name="client_name" type="text" placeholder="Your name" required>
            <input name="company" type="text" placeholder="Company">
            <input name="position" type="text" placeholder="Position">

            <textarea name="text" placeholder="Your review" required></textarea>

            <select name="rating" required>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
    
            <button type="submit">Send review</button>
        </form>
    `
}