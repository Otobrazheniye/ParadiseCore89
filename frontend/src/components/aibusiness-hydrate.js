import { getUserPackageAccesses, getUserTrainingAccesses, getUserServiceAccesses } from "../api/accessApi";
import { getServices, getPackagePlans } from "../api/servicesApi";


// User
export async function hydrateUserAccess(){
  try{
    const userAccessPackage = await getUserPackageAccesses()
    const userAccessTraining = await getUserTrainingAccesses()
    const userAccessService = await getUserServiceAccesses()

    const packageContainer = document.querySelector("[data-user-packages]")
    const trainingContainer = document.querySelector("[data-user-trainings]")
    const serviceContainer = document.querySelector("[data-user-services]")
    
    console.log("USER ACCESS PACKAGE FROM API:", userAccessPackage)
    console.log("USER ACCESS TRAINING FROM API:", userAccessTraining)
    console.log("USER ACCESS SERVICE FROM API:", userAccessService)
  
    if (!packageContainer || !trainingContainer || !serviceContainer) return

    packageContainer.innerHTML = ""
    trainingContainer.innerHTML = ""
    serviceContainer.innerHTML = ""

    renderAccessList(
      "[data-user-packages]", userAccessPackage,
      "Packages have not been purchased yet or access has expired.",
      (item) => item.package_plan.title
    )

    renderAccessList(
      "[data-user-services]", userAccessService,
      "Services have not been unlocked yet.",
      (item) => item.service.title
    )

    renderAccessList(
      "[data-user-trainings]", userAccessTraining,
      "Training access has not been unlocked yet.",
      (item) => item.training_program.title
    )
  }
  catch(error){
    console.error("Failed to load User Access", error)
  }
}


// Package Plans
export async function hydratePackagePlansPrepare(packageSlug){
  try{
    const packagePlans = await getPackagePlans()
    const services = await getServices()

    const selectedPackage = packagePlans.find((pack) =>{
      return pack.slug === packageSlug
    })

    if(!selectedPackage){
      console.error("Package not found:", packageSlug);
      return
      }

    const maxServices = selectedPackage.max_services
    
    const maxServicesElement = document.querySelectorAll(`[data-checkout-field="${selectedPackage.slug}.max_services"]`)
    const selectedCountElement = document.querySelector("[data-checkout-selected-count]")
    const servicesContainer = document.querySelector("#checkout-services-list") 

    maxServicesElement.forEach((element) => {
      element.textContent = maxServices
    })

    if(selectedCountElement){
      selectedCountElement.textContent = "0"
    }

    if(!servicesContainer) return

    servicesContainer.innerHTML = "";

    services.forEach((service) => {
      const serviceCard = document.createElement("label");
      serviceCard.classList.add("package-checkout__service-card");

      serviceCard.innerHTML = `
        <input 
          type="checkbox" 
          name="selected_services" 
          value="${service.id}"
          data-service-slug="${service.slug}"
        >

        <span class="package-checkout__service-title">
          ${service.title}
        </span>

        <span class="package-checkout__service-text">
          ${service.short_description || ""}
        </span>
      `;

      servicesContainer.append(serviceCard);
    });
    setupServiceSelectionLimit(maxServices);
    renderIncludedTrainings(selectedPackage.included_trainings);
    }
  catch(error){
    console.error("Failed to hydrate package prepare page:", error);
  }

}

function setupServiceSelectionLimit(maxServices){
  const checkboxes = document.querySelectorAll('input[name="selected_services"]');
  const selectedCountElement = document.querySelector("[data-checkout-selected-count]");

  function updateSelectionState() {
    const checkedBoxes = Array.from(checkboxes).filter((checkbox) => {
      return checkbox.checked;
    });

    const selectedCount = checkedBoxes.length;

    if (selectedCountElement) {
      selectedCountElement.textContent = selectedCount;
    }

    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked && selectedCount >= maxServices) {
        checkbox.disabled = true;
      } else {
        checkbox.disabled = false;
      }
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelectionState);
  });

  updateSelectionState();
}

function renderIncludedTrainings(trainings) {
  const trainingContainer = document.querySelector("#checkout-training-options");
  const summaryTrainingContainer = document.querySelector("[data-checkout-trainings]");

  if (!Array.isArray(trainings)) return;

  const html = trainings.map((training) => {
    return `
      <div class="package-checkout__training-card">
        <strong>${training.title}</strong>
        <span>${training.level}</span>
      </div>
    `;
  }).join("");

  if (trainingContainer) {
    trainingContainer.innerHTML = html || "<p>No included trainings.</p>";
  }

  if (summaryTrainingContainer) {
    summaryTrainingContainer.innerHTML = html || "<p>No included trainings.</p>";
  }
}

export async function hydratePackagePlans(){
  try{
    const PackageGrid = await getPackagePlans()
    console.log("ABOUT PACKAGE PLANS FROM API:", PackageGrid)

    PackageGrid.forEach((pack)=>{
      setText(`[data-package-plan-field="${pack.slug}.name"]`, pack.name)
      setText(`[data-package-plan-field="${pack.slug}.title"]`, pack.title)
      setText(`[data-package-plan-field="${pack.slug}.summary"]`, pack.summary)
      setText(`[data-package-plan-field="${pack.slug}.badge"]`, pack.badge)
      setText(`[data-package-plan-field="${pack.slug}.includes_title"]`, pack.includes_title)
      setText(`[data-package-plan-field="${pack.slug}.best_for_title"]`, pack.best_for_title)
      setText(`[data-package-plan-field="${pack.slug}.button_label"]`, pack.button_label)
      setText(`[data-package-plan-field="${pack.slug}.max_services"]`, pack.max_services)

      setList(`[data-package-plan-includes="${pack.slug}"]`, pack.includes_list)

      setParagraphs(`[data-package-plan-paragraphs="${pack.slug}"]`, pack.description_paragraphs)
      setParagraphs(`[data-package-plan-best="${pack.slug}"]`, pack.best_for_list)
  })
    
  }
  catch(error){
    console.error("Failed to load About AI Business", error)
  }
}


// Set
function setText(selector, value){
  const element = document.querySelector(selector)
  if(!element || value === undefined || value === null) return

  element.textContent = value
}

function setList(selector, items){
  const list = document.querySelector(selector)
  if(!list || !Array.isArray(items)) return

  // console.log("SET LIST SELECTOR:", selector)
  // console.log("SET LIST ELEMENT:", list)
  // console.log("SET LIST ITEMS:", items)

  list.innerHTML = ""

  items.forEach((itemText)=>{
    const item = document.createElement("li")
    item.textContent = itemText
    list.append(item)
  })
  // console.log("SET LIST RESULT:", list.innerHTML)
}


function renderAccessList(selector, items, emptyText, getTitle) {
  const container = document.querySelector(selector)

  if (!container) return

  container.innerHTML = ""

  if (!items || items.length === 0) {
    const emptyMessage = document.createElement("p")
    emptyMessage.className = "user-access__empty"
    emptyMessage.textContent = emptyText

    container.append(emptyMessage)
    return
  }

  items.forEach((item) => {
    const accessItem = document.createElement("div")
    accessItem.className = "user-access__item"

    const title = document.createElement("strong")
    title.textContent = getTitle(item)

    const status = document.createElement("span")
    status.textContent = item.is_active ? "Active" : "Inactive"

    accessItem.append(title, status)
    container.append(accessItem)
  })
}


function setParagraphs(selector, paragraphs){
  const container = document.querySelector(selector)
  if(!container || !Array.isArray(paragraphs)) return

  container.innerHTML = ""

  paragraphs.forEach((paragraphText)=>{
    const paragraph = document.createElement("p")
    paragraph.textContent = paragraphText
    container.append(paragraph)
  })
}
