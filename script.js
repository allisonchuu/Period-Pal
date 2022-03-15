

document.querySelector("#titlepage").addEventListener("keyup", event => {
  if (event.code !== "Enter") return;
  window.location = "game.html";
  event.preventDefault();
});

document.querySelector("#titlepage").addEventListener("click", function () {
  window.location = "game.html";
});

document.querySelector("#titlegame").addEventListener("click", function () {
  window.location = "index.html";
});
