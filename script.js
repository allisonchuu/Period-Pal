

document.querySelector("#titlepage").addEventListener("keyup", event => {
  if (event.key !== "Enter") return;
  window.location = "game.html";
  event.preventDefault();
});

document.querySelector("#titlegame").addEventListener("click", function () {
  window.location = "index.html";
});
