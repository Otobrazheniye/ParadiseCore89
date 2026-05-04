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
        let key = i.dataset.i18n.split(".")
        const value = key.reduce((obj,part)=> {
            return obj?.[part]
        },translations[language])
        if(value){
          i.textContent = value  
        }
        
    })
}

export const translations = {
    EN: {
        auth:{
            login: 'Login',
            registration: 'Registration',
            password: 'Pasword', 
            passwordPlaceholder: 'Enter pasword'  
        },
  
    // close: 'Close',
 
  },

    CZ: {
    auth: {
        login: 'Přihlášení',
        registration: 'Registrace',
        password: 'Heslo',
        passwordPlaceholder: 'Zadejte heslo'
    }
  },

    RU: {
    auth: {
        login: 'Вход',
        registration: 'Регистрация',
        password: 'Пароль',
        passwordPlaceholder: 'Введите пароль'
    }
  },
  
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
