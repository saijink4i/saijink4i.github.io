const supportedLanguages = ['ko', 'ja'];

function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    const shortLang = lang.split('-')[0];
    return supportedLanguages.includes(shortLang) ? shortLang : 'ko';
}

function changeLanguage(lang) {
    document.querySelectorAll('[lang]').forEach(elem => {
        elem.style.display = 'none';
    });
    document.querySelectorAll(`[lang="${lang}"]`).forEach(elem => {
        elem.style.display = 'block';
    });
    document.querySelector('#language-selector').value = lang;
    localStorage.setItem('preferredLanguage', lang);
}

function setInitialLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = getBrowserLanguage();
    const initialLang = savedLang || browserLang;
    changeLanguage(initialLang);
}

document.addEventListener('DOMContentLoaded', (event) => {
    setInitialLanguage();
});