let n = 16;
const Container = document.getElementById("container");

const Slider = document.getElementById("slider");
const SliderInput = document.getElementById("sliderValue");
Slider.oninput = function () {
  SliderInput.textContent = this.value;
  n = this.value;
};

const generateBtn = document.getElementById("generate");
generateBtn.onclick = renderGrid;

function renderGrid() {
  let table = ``;
  for (let i = 0; i < n; i++) {
    table += `<div class = "row">`;
    for (let j = 0; j < n; j++) {
      table += `<div class = "atom"></div>`;
    }
    table += `</div>`;
  }
  Container.innerHTML = table;
}
renderGrid();

document.addEventListener("dragenter", (e) => {
  if (e.target.classList.contains("atom")) {
    e.target.classList.add("green");
    console.log(e.target.classList);
  }
});
