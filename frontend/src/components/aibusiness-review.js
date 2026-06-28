import { createReview, getListReview } from "../api/reviewApi"


export async function renderReviews() {
  const reviewsGrid = document.querySelector('#reviews-grid')

  if (!reviewsGrid) return

  try {
    const reviews = await getListReview()

    reviewsGrid.innerHTML = ''

    reviews.forEach((review) => {
      const card = document.createElement("article")
      card.classList.add("review-card")

      const clientName = document.createElement("h3")
      clientName.textContent = review.client_name

      const meta = document.createElement("p")
      meta.classList.add("review-card__meta")

      const companyParts = []

      if (review.company) {
        companyParts.push(review.company)
      }

      if (review.position) {
        companyParts.push(review.position)
      }

      meta.textContent = companyParts.join(" • ")

      const text = document.createElement("p")
      text.classList.add("review-card__text")
      text.textContent = review.text

      const rating = document.createElement("span")
      rating.classList.add("review-card__rating")
      rating.textContent = `${review.rating}/5`

      card.append(clientName, meta, text, rating)
      reviewsGrid.append(card)
    })
  } catch (error) {
    console.error("Failed to load reviews:", error)
  }
}


export function setupReviewForm() {
  const form = document.querySelector('#review-form');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const reviewData = {
      client_name: formData.get('client_name'),
      company: formData.get('company'),
      position: formData.get('position'),
      text: formData.get('text'),
      rating: Number(formData.get('rating')),
    };

    try {
      const result = await createReview(reviewData);

      console.log('Review created:', result);

      form.reset();

      alert('Review sent successfully. It will appear after moderation.');
    } catch (error) {
      console.error('Review create error:', error);

      alert('Failed to send review.');
    }
  });
}



export function renderAIBusinessReview() {
  return `
    

    <section class="reviews-section">
      <div class="reviews-canvas">
        <div class="reviews-hero">
          <span class="reviews-hero__eyebrow">Client Feedback</span>
          <h2 class="reviews-hero__title">Reviews</h2>
          <p class="reviews-hero__text">
            Real impressions from clients who explored automation, AI workflows,
            and business process optimization with Paradise Core 89.
          </p>
        </div>

        <div class="reviews-grid" id="reviews-grid"></div>

        <form class="review-form" id="review-form">
          <h3 class="review-form__title">Leave your review</h3>

          <div class="review-form__row">
            <input type="text" name="client_name" placeholder="Your name" required />
            <input type="text" name="company" placeholder="Company" />
            <input type="text" name="position" placeholder="Position" />
          </div>

          <div class="review-form__row review-form__row--stack">
            <textarea name="text" placeholder="Your review" required></textarea>

            <div class="review-form__actions">
              <select name="rating">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>

              <button type="submit">Send review</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `
}