import "bootstrap/dist/css/bootstrap.css";
/*
         import jokes from "./jokes";
         
         const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
         document.getElementById("jokes").innerHTML = allJokes.join("");
         
         
         
         var btn = document.getElementById("btn");
         btn.onclick = function () {
         var jokeId = jokes.getJokeById(document.getElementById("input").value);
         document.getElementById("idJoke").innerHTML = jokeId;
         }
         
         var btnAdd = document.getElementById("btnAdd");
         btnAdd.onclick = () => {
         jokes.addJoke(document.getElementById("inputJoke").value);
         const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
         document.getElementById("jokes").innerHTML = allJokes.join("");
         }
         */
let url = "https://studypoints.info/jokes/api/jokes/period/hour";

document.getElementById("btn").addEventListener("click", e => {
  e.preventDefault();
  fetch(url)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {
      document.getElementById("quoteDiv").innerHTML = data.joke;
    });
  setInterval(function() {
    fetch(url)
      .then(res => res.json()) //in flow1, just do it
      .then(data => {
        document.getElementById("quoteDiv").innerHTML = data.joke;
      });
  }, 360000);
});

document.getElementById("north").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("quoteDiv").innerHTML = "North";
});

document.getElementById("east").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("quoteDiv").innerHTML = "East";
});

document.getElementById("south").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("quoteDiv").innerHTML = "South";
});

document.getElementById("west").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("quoteDiv").innerHTML = "West";
});
