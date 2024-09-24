const containerDiv = document.querySelector(".container");

let numberOfSquareDivs = 16 * 16;

for (let i = 1; i <= numberOfSquareDivs; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square");
  containerDiv.appendChild(squareDiv);

  squareDiv.addEventListener('mouseover', () => {
    squareDiv.style.backgroundColor = 'red';
})
}

