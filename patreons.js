let patreon = document.getElementById('patreon');

let urlLogos = {
    Aqua:'public/AJUSTADOR-LOGOS_0000_AQUA.png',
    Alcaldia:'public/AJUSTADOR-LOGOS_0010_ALCALDIA.png',
    Gobernacion:'public/AJUSTADOR-LOGOS_0011_GOBERNACION.png',
    John_Paolo:'public/AJUSTADOR-LOGOS_0006_JOHN-PAOLO.png',
    Uniminuto:'public/AJUSTADOR-LOGOS_0005_UNIMINUTO.png',
    Escobar_Arias:'public/AJUSTADOR-LOGOS_0003_ESCOBAR-ARIAS.png',
    Bocared:'public/AJUSTADOR-LOGOS_0004_BOCARED.png',
    Travesuras:'public/AJUSTADOR-LOGOS_0002_TRAVESURAS.png',
    Derco:'public/AJUSTADOR-LOGOS_0001_DERCO.png',
    Helados_Col:'public/AJUSTADOR-LOGOS_0007_HEALDOS-COLOMBINA.png',
    Universo_Moda:'public/AJUSTADOR-LOGOS_0008_UNIVERSO.MODA.png',
    Proyectamos_Edificamos:'public/AJUSTADOR-LOGOS_0009_PROYECTAMOS-EDIFICAMOS.png',
    Panty_Jeans:'public/AJUSTADOR-LOGOS_0015_PANTY-JEANS.png',
    Playa_Hawai:'public/AJUSTADOR-LOGOS_0012_PLAYA-HAWAI.png',
    Los_Girasoles:'public/AJUSTADOR-LOGOS_0013_LOS-GIRASOLES.png',
    Nasly_Reyes:'public/AJUSTADOR-LOGOS_0014_NASLY-REYES.png',
    Mercacentro:'public/AJUSTADOR-LOGOS_0016_MERCACENTRO.png'
};

let urls = Object.values(urlLogos);
let currentIndex = 0;

setInterval(() => {
    patreon.setAttribute("src", urls[currentIndex]);
    currentIndex = (currentIndex + 1) % urls.length;
}, 1000);
