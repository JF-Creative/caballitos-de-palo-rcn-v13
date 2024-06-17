let remain = document.getElementById('remain');

setInterval(() => {
    let currentDate = new Date();
    let limitDate = new Date("2024-06-29T16:00:00");
    let timeRemain = limitDate - currentDate;

    remain.innerHTML = `<h1>${setCountDown(timeRemain)}</h1>`;
}, 1000);

function setCountDown(timeRemain) {
    const timeInfo = {
        'Días': Math.floor(timeRemain / (1000 * 60 * 60 * 24)),
        'Horas': Math.floor(timeRemain / (1000 * 60 * 60)) % 24,
        'Minutos': String(Math.floor(timeRemain / (1000 * 60)) % 60).padStart(2, '0'),
        'Segundos': String(Math.floor(timeRemain / 1000) % 60).padStart(2, '0')
    };

    let timerData = '';
    for (let [unit, value] of Object.entries(timeInfo)) {
        timerData += `<span>${value} ${unit}  </span> `;
    }

    return timerData.trim();
}
