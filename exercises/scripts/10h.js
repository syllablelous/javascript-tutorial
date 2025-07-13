function handleCostKeyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");

  let cost = Number(inputElement.value);

  if (cost < 0) {
    document.querySelector(".js-total-cost").classList.add("error");
    document.querySelector(".js-total-cost").innerHTML =
      "Error: cost cannot be less than $0";
  } else {
    document.querySelector(".js-total-cost").classList.remove("error");
    if (cost < 40) {
      cost += 10;
    }

    document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
  }
}
function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}
