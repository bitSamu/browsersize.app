const heightContainer = document.querySelector("#height");
const widthContainer = document.querySelector("#width");

function setSize() {
  requestAnimationFrame(function () {
    heightContainer.textContent = window.innerHeight;
    widthContainer.textContent = window.innerWidth;
  });
}

setSize();

window.addEventListener("resize", setSize);
