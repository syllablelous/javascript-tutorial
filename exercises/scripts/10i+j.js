let calculation = localStorage.getItem("calculation") || "";

if (calculation) {
  document.querySelector(".js-calculation-text").innerHTML = calculation;
}

function updateCalculation(key) {
  if (key === "=") {
    calculation = eval(calculation);
  } else if (key === "") {
    calculation = "0";
  } else {
    calculation === "0" && key !== "."
      ? (calculation = key)
      : (calculation += key);
  }

  document.querySelector(".js-calculation-text").innerHTML = calculation;

  localStorage.setItem("calculation", calculation);
}
