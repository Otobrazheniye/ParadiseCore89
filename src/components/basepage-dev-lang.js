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
  EN: {
    auth: {
      login: 'Login',
      registration: 'Registration',
      password: 'Password',
      authentication: 'Authentication',
      passwordPlaceholder: 'Enter password'
    }
  },

  CZ: {
    auth: {
      login: 'Přihlášení',
      registration: 'Registrace',
      password: 'Heslo',
      authentication: 'Ověření',
      passwordPlaceholder: 'Zadejte heslo'
    }
  },

  RU: {
    auth: {
      login: 'Вход',
      registration: 'Регистрация',
      password: 'Пароль',
      authentication: 'Аутентификация',
      passwordPlaceholder: 'Введите пароль'
    }
  },

  UA: {
    auth: {
      login: 'Вхід',
      registration: 'Реєстрація',
      password: 'Пароль',
      authentication: 'Аутентифікація',
      passwordPlaceholder: 'Введіть пароль'
    }
  },

  DE: {
    auth: {
      login: 'Anmelden',
      registration: 'Registrieren',
      password: 'Passwort',
      authentication: 'Authentifizierung',
      passwordPlaceholder: 'Passwort eingeben'
    }
  },

  FR: {
    auth: {
      login: 'Connexion',
      registration: 'Inscription',
      password: 'Mot de passe',
      authentication: 'Authentification',
      passwordPlaceholder: 'Entrez le mot de passe'
    }
  },

  中文: {
    auth: {
      login: '登录',
      registration: '注册',
      password: '密码',
      authentication: '身份验证',
      passwordPlaceholder: '输入密码'
    }
  },

  日本語: {
    auth: {
      login: 'ログイン',
      registration: '登録',
      password: 'パスワード',
      authentication: '認証',
      passwordPlaceholder: 'パスワードを入力'
    }
  },

  العربية: {
    auth: {
      login: 'تسجيل الدخول',
      registration: 'إنشاء حساب',
      password: 'كلمة المرور',
      authentication: 'المصادقة',
      passwordPlaceholder: 'أدخل كلمة المرور'
    }
  },

  עברית: {
    auth: {
      login: 'התחברות',
      registration: 'הרשמה',
      password: 'סיסמה',
      authentication: 'אימות',
      passwordPlaceholder: 'הכנס סיסמה'
    }
  }
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
