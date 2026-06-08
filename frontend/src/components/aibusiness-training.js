import { getTrainingPrograms, getTrainingProgramBySlug } from "../api/trainingApi";

export function renderAIBusinessTrainingProgram(){
    return `
        <section class="training-section">
            <div class="training-grid" id="training-grid"></div>
        </section>
    `
}



export async function renderTrainingPrograms() {
  const trainingGrid = document.querySelector("#training-grid")

  if (!trainingGrid) return

  try {
    const programs = await getTrainingPrograms()

    trainingGrid.innerHTML = " ";

    programs.forEach((program) => {
      const card = document.createElement("article")
      card.classList.add("training-card")

      const level = document.createElement("span")
      level.classList.add("training-card__level")
      level.textContent = program.level

      const title = document.createElement("h3")
      title.textContent = program.title

      const description = document.createElement("p")
      description.textContent = program.short_description

      const meta = document.createElement("p")
      meta.classList.add("training-card__meta")

      const metaParts = []

      if (program.duration) {
        metaParts.push(program.duration)
      }

      if (program.target_audience) {
        metaParts.push(program.target_audience)
      }

      meta.textContent = metaParts.join(" • ")

      card.append(level, title, description, meta)
      trainingGrid.append(card)
    });
  } catch (error) {
    console.error("Failed to load training programs:", error)
  }
}