let inp = document.querySelector("#inp");
let expression = "";

function append() {
  let value = this.innerText;

  if (value === "=") {
    try {
      // Evaluate the expression
      expression = eval(expression);
    } catch (e) {
      expression = "Error";
    }
  } else if (value.toLowerCase() === "clear") {
    expression = "";
  } else {
    expression += value;
  }

  inp.value = expression;
}

// Get all buttons inside the calculator div
let buttons = document.querySelectorAll("#calc button");

// Attach event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", append);
});