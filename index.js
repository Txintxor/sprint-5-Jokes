const url = "https://icanhazdadjoke.com/";
const reportAcudits = [];
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
    // console.log();
    // console.log()
    weatherContainer.innerHTML = `<h1>${response.current.condition.text} <img src="${response.current.condition.icon}"></h1>`;
  })
  .catch((err) => console.error(err.message));


async function fetchJoke() {
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const joke = data.joke;
      showJoke(joke)
    })
    .catch((error) => console.log(error.message));
}

function showJoke(joke) {
  const container = document.querySelector("#app");
  const content = document.createElement("h2");
  container.innerHTML = '';
  container.appendChild(content);
  content.innerHTML = joke;
}

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
}

