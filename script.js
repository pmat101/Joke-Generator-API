const loadJoke = () => {
  fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319"
  ) // Fetching a joke generator API
    .then((response) => response.json()) // Storing the response JSON text
    .then((data) => (document.getElementById("joke").innerText = data.joke))
    .catch(
      () => (document.getElementById("joke").innerText = "Please try again..") // Catching an error
    );
};

loadJoke();

document.getElementById("jokeBtn").addEventListener("click", loadJoke);
