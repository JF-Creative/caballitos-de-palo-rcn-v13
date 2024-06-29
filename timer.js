let remain = document.getElementById("remain");

setInterval(() => {
  let currentDate = new Date();
  let limitDate = new Date("2024-06-29T16:00:00");
  let timeRemain = limitDate - currentDate;
  let datelimit1 = new Date("2024-06-29T07:00:00");
  let datelimit2 = new Date("2024-06-29T12:00:00");

  if (currentDate > datelimit2) {
    remain.innerHTML = `<h1>¡Es hoy!</h1><h2>Te esperamos en Mercacentro de la Calle 37 con Carrera Quinta a las 4:00 p.m.</h2>`;
  } else {
    remain.innerHTML = `<h2>Falta:</h2><h1>${setCountDown(
      timeRemain,
      datelimit1
    )}</h1>`;
  }
}, 1000);

function setCountDown(timeRemain, datelimit1) {
  const timeInfo = {
    Días: Math.floor(timeRemain / (1000 * 60 * 60 * 24)),
    Horas: Math.floor(timeRemain / (1000 * 60 * 60)) % 24,
    Minutos: String(Math.floor(timeRemain / (1000 * 60)) % 60).padStart(2, "0"),
    Segundos: String(Math.floor(timeRemain / 1000) % 60).padStart(2, "0"),
  };

  let timerData = "";

  if (timeRemain <= datelimit1) {
    delete timeInfo.Días;
    for (let [unit, value] of Object.entries(timeInfo)) {
      timerData += `<span>${value} ${unit}  </span> `;
    }
  } else {
    for (let [unit, value] of Object.entries(timeInfo)) {
      timerData += `<span>${value} ${unit}  </span> `;
    }
  }

  return timerData.trim();
}
