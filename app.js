const clock = document.querySelector("#clock");

const horaactual = () => {
  const date = new Date();

  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  return `${hora}:${minutos}:${segundos}`;
};

const horamostrar = () => {
  clock.textContent = horaactual();
};

setInterval(horamostrar, 100);
