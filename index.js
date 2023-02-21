const container = document.getElementById("container");
const slider = document.getElementById("slider");
const sliderInput = document.getElementById("sliderValue");
const generateBtn = document.getElementById("generate");
//set default size of grid
let gridSize = 16;
slider.addEventListener("input", handleSizeChange);
function handleSizeChange() {
  sliderInput.textContent = this.value;
  gridSize = this.value;
}
function renderGrid() {
  const table = document.createDocumentFragment();
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const atom = document.createElement("div");
      atom.classList.add("atom");
      row.appendChild(atom);
    }
    table.appendChild(row);
  }
  container.replaceChildren(table);
}
document.addEventListener("dragenter", handleCellHighlight);
function handleCellHighlight(e) {
  if (e.target.classList.contains("atom")) {
    e.target.classList.add("green");
  }
}
renderGrid();
generateBtn.addEventListener("click", renderGrid);
