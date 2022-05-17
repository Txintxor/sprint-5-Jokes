const url = "https://icanhazdadjoke.com/";

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


