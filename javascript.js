const button = document.querySelector("button");
const containerDiv = document.querySelector(".container");

function getUserChoice() {
  button.addEventListener("click", () => {
    let userInput = prompt("Enter a value upto 100:", 8);

    if (userInput === null) {
      return;
    } else {
      userInput = parseInt(userInput, 10);
    }

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      alert("Enter a valid number!");
      return;
    } else {
      containerDiv.innerHTML = ""; // Clear all squares
    }

    let numberOfSquareDivs = userInput * userInput;

    for (let i = 1; i <= numberOfSquareDivs; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.setAttribute("class", "square");
      squareDiv.style.width = String((1 / userInput) * 100) + "%"; // Adjust based on the number of squares per row
      squareDiv.style.paddingTop = String((1 / userInput) * 100) + "%"; // Maintain aspect ratio (1:1)
      containerDiv.appendChild(squareDiv);

      squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = "red";
      });
    }
  });
}

getUserChoice();
