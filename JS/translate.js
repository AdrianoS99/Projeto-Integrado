const translations = {
    pt: {
        title: "Teste, vamos ver se funciona",
        description: "Não sei se funciona",
        buttonText: "Mudar para Espanhol"
    },
    en: {
        title: "Test, let's see if it works",
        description: "I don't know if it works",
        buttonText: "Switch to Spanish"
    },
    es: {
        title: "Prueba, vamos a ver si funciona",
        description: "No sé si funciona",
        buttonText: "Cambiar a Portugués"
    }
};

let currentLanguage = 'pt';
function toggleLanguage() {
    if (currentLanguage === 'pt') {
        currentLanguage = 'en';
    } else if (currentLanguage === 'en') {
        currentLanguage = 'es';
    } else {
        currentLanguage = 'pt';
    }
    updateContent();
}
function updateContent() {
    document.querySelector('#titulo h1').textContent = translations[currentLanguage].title;
    document.querySelector('#titulo p').textContent = translations[currentLanguage].description;
    document.querySelector('#language-toggle').textContent = translations[currentLanguage].buttonText;
}
updateContent();