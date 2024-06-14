let patreon = document.getElementById('patreon');

let urlLogos = {
    Aqua:'public/logo-temp.png',
    John_Paolo:'public/logo-header.png',
    Uniminuto:'public/Logotipo_de_la_Corporación_Universitaria_Minuto_de_Dios.svg.png',
    Escobar_Arias:'public/792016743-4224429369.jpeg',
    Bocared:'public/bocared.jpg',
    Mercacentro:'public/LOGO_MERCACENTRO.png',
};

let urls = Object.values(urlLogos);
let currentIndex = 0;

setInterval(() => {
    patreon.setAttribute("src", urls[currentIndex]);
    currentIndex = (currentIndex + 1) % urls.length;
}, 2500);
