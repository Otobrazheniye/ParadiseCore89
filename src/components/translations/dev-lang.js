import { AR } from "./lang-ar"
import { CZ } from "./lang-cz"
import { DE } from "./lang-de"
import { EN } from "./lang-en"
import { FR } from "./lang-fr"
import { HE } from "./lang-he"
import { JA } from "./lang-ja"
import { RU } from "./lang-ru"
import { UA } from "./lang-ua"
import { ZH } from "./lang-zh"

export function LanguageSwitchButton(){
    const buttonLanguageName = document.querySelectorAll('.basepage-main-language__btn')
    let activeLanguage = 'EN'
   
    buttonLanguageName.forEach((i)=>{
        i.addEventListener('click',()=>{
            activeLanguage  = i.dataset.lang
            languageSwitch(activeLanguage)
        })
    })
   languageSwitch("EN")

}

function languageSwitch(activeLanguage){
    const buttonLanguage = document.querySelectorAll('[data-i18n]')
   
    const language = activeLanguage


    buttonLanguage.forEach((i)=> {
        let key = i.dataset.i18n.split(".")
        const value = key.reduce((obj,part)=> {
            return obj?.[part]
        },translations[language])
        if(value){
          i.textContent = value  
        }
        
    })

    const buttonPlaceholder = document.querySelectorAll('[data-i18n-placeholder]')

    buttonPlaceholder.forEach((i)=>{
        let key = i.dataset.i18nPlaceholder.split('.')
        const value = key.reduce((i,j)=>{
            return i?.[j]
        },translations[language])
        if(value){
            i.placeholder = value
        }
    })
}
export const translations = {
  AR,CZ,DE,EN,FR,HE,JA,RU,UA,ZH,
};

// Heplpers
// data-i18n - между тегами - Email
// placeholder - внутри input - Enter email
// value - текст кнопки input - Login
// title - всплывающая подсказка - Secure access

// 中文 вместо ZH
// 日本語 вместо JA
// العربية вместо AR
// עברית вместо HE
