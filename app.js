const clock = document.querySelector("#clock");

const number = (number) => (`${number}`.length < 2 ? `0${number}` : number);

const horaactual = () => {
  const date = new Date();
  const hora = number(date.getHours());
  const minutos = number(date.getMinutes());
  const segundos = number(date.getSeconds());
  return `${hora}:${minutos}:${segundos}`;
};

const horamostrar = () => {
  clock.textContent = horaactual();
};

setInterval(horamostrar, 100);
