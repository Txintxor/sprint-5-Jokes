//Constantes de URL´s chistes y array contenedor de puntuaciones

const url1 = "https://icanhazdadjoke.com/";
const url2 = "https://api.chucknorris.io/jokes/random";
const reportAcudits = [];


//Constantes y fetching de la API meteorológica
const weatherUrl =
  "http://api.weatherapi.com/v1/current.json?key=83be30f2876a48efa5f163236221805&q=Barcelona&aqi=no";
const weatherContainer = document.querySelector("#weatherContainer");
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

fetch(weatherUrl, options)
  .then((response) => response.json())
  .then((response) => {
    weatherContainer.innerHTML = `<h1>${response.current.condition.text} <img src="${response.current.condition.icon}"></h1>`;
  })
  .catch((err) => console.error(err.message));


  //Fetching las API´s de chistes, uso de Math.random para elegir al azar una de las dos
function fetchJoke() {
  const url = Math.floor(Math.random() * 10) % 2 == 0 ? url1 : url2;
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const joke = url == url1 ? data.joke : data.value;
      showJoke(joke);
    })
    .catch((error) => console.log(error.message));
}


//Una vez descargado y parseado el chiste se añade al HTML
function showJoke(joke) {
  const container = document.querySelector("#app");
  const content = document.createElement("h2");
  const scoreUl = document.querySelector("#scoreContainer");
  container.innerHTML = "";
  scoreUl.innerHTML = `<li class="scoreButton" id="button1"><a onclick="jokeScore(1)">&#128529;</a></li>
  <li class="scoreButton" id="button2"><a onclick="jokeScore(2)">&#128527;</a></li>
  <li class="scoreButton" id="button3"><a onclick="jokeScore(3)">&#129315;</a></li>`;
  container.appendChild(content);
  content.innerHTML = joke;
}


//Función que se encarga de: crear los botones una vez se ha mostrado el chiste
//Inutiliza los botones después de puntuar
//Recoge la puntuacion y la añade a un objeto con fecha y el chistes
//Añade el objeto al array reportAcudits[]
//Pasa el array por consola
function jokeScore(score) {
  const buttons = document.querySelectorAll(".scoreButton");
  buttons.forEach((button) =>
    button.setAttribute("style", "pointer-events: none")
  );
  const jokeContent = document.querySelector("#app").textContent;
  const date = new Date();
  let txt = date.toISOString();
  const scoreData = {
    joke: jokeContent,
    score: score,
    date: txt,
  };

  reportAcudits.push(scoreData);
  console.log(reportAcudits);
}