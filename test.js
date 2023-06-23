


const bars = document.querySelector(".fas");
const minimenu = document.querySelector("#minimenu");

function onClick() {
  minimenu.classList.toggle("hidden");
}

bars.addEventListener("click", onClick);