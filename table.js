const input2 = document.getElementById("taB2");
const input3 = document.getElementById("taB3");
const input4 = document.getElementById("taB4");

const display2 = document.getElementById("diS2");
const display3 = document.getElementById("diS3");
const display4 = document.getElementById("diS4");

const button2 = document.getElementById("btN2");
const button3 = document.getElementById("btN3");
const button4 = document.getElementById("btN4");

// Event listeners
button2.addEventListener("click", () => {
  const number = parseInt(input2.value);
  displayMultiplicationTable(number, display2);
});

button3.addEventListener("click", () => {
  const number = parseInt(input3.value);
  displayMultiplicationTable(number, display3);
});

button4.addEventListener("click", () => {
  const number = parseInt(input4.value);
  displayMultiplicationTable(number, display4);
});

// Function to display multiplication table
function displayMultiplicationTable(number, display) {
  let table = "<table>";
  for (let i = 1; i <= 10; i++) {
    table += "<tr><td>" + number + " x " + i + " = </td><td>" + (number * i) + "</td></tr>";
  }
  table += "</table>";
  display.innerHTML = table;
}