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
    const buttonLanguageAuth = document.querySelectorAll('[data-i18n]')
    const language = activeLanguage

    buttonLanguageAuth.forEach((i)=> {
        const key = i.dataset.i18n
    
        i.textContent = translations[language][key]
    })
}



// 中文 вместо ZH
// 日本語 вместо JA
// العربية вместо AR
// עברית вместо HE
export const translations = {
    EN: {
    login: 'Login',
    registration: 'Registration',
    // close: 'Close',
 
  },

  CZ: {
    login: 'Přihlášení',
    registration: 'Registrace',

  },

  RU: {
    login: 'Вход',
    registration: 'Регистрация',

  },
  
};