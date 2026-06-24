import { getUserPackageAccesses, getUserTrainingAccesses, getUserServiceAccesses } from "../api/accessApi";
import { getServices } from "../api/servicesApi";


function setText(selector, value){
    const element = document.querySelector(selector)

    if(!element || value === null || value === undefined) return

    element.textContent = value
}


function setList(selector, value){
    const container = document.querySelector(selector)

    if(!container || !Array.isArray(value)) return

    container.innerHTML = ""

    value.forEach((paragraphText)=>{
        const paragraph = document.createElement("p")
        paragraph.textContent = paragraphText
        container.append(paragraph)
    })
}



    

export async function renderUserAccess(){
    const userAccessGrid = document.querySelector("#userAccessGrid")

    if(!userAccessGrid) return

    try{
        const userAccessPackage = await getUserPackageAccesses()
        const userAccessTraining = await getUserTrainingAccesses()
        const userAccessService = await getUserServiceAccesses()

        userAccessGrid.innerHTML = ""

        userAccessPackage.forEach((Package) =>{
            
        })
    }
}