import { getServices, getPackagePlans } from "../api/servicesApi";

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