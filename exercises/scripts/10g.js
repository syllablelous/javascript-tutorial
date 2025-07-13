function toggleButton(name) {
  const buttonElement = document.querySelector(`.js-${name}-button`).classList;

  const activeToggledButton = document.querySelector(".is-toggled");

  if (buttonElement.contains("is-toggled")) {
    buttonElement.remove("is-toggled");
  } else {
    if (activeToggledButton) {
      activeToggledButton.classList.remove("is-toggled");
    }
    buttonElement.add("is-toggled");
  }
}
