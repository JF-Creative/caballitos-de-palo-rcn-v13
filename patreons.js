let patreon = document.getElementById('patreon');

let urlLogos = {
    Aqua:'public/AJUSTADOR-LOGOS_0004_AQUA.png',
    John_Paolo:'public/AJUSTADOR-LOGOS_0006_JOHN-PAOLO.png',
    Uniminuto:'public/AJUSTADOR-LOGOS_0005_UNIMINUTO.png',
    Escobar_Arias:'public/AJUSTADOR-LOGOS_0002_ESCOBAR-ARIAS.png',
    Bocared:'public/AJUSTADOR-LOGOS_0003_BOCARED.png',
    Mercacentro:'public/AJUSTADOR-LOGOS_0007_MERCACENTRO.png',
    Travesuras:'public/AJUSTADOR-LOGOS_0001_TRAVESURAS.png',
    Derco:'public/AJUSTADOR-LOGOS_0000_DERCO.png'
};

let urls = Object.values(urlLogos);
let currentIndex = 0;

setInterval(() => {
    patreon.setAttribute("src", urls[currentIndex]);
    currentIndex = (currentIndex + 1) % urls.length;
}, 2500);
