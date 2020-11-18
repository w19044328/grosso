
function numbergeneration() {
  let generation = (Math.floor(Math.random() * (100) + 1));
  document.getElementById("computerNumber").innerHTML = generation;
}
