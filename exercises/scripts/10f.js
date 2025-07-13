function toggleButton(name) {
  const buttonElement = document.querySelector(`.js-${name}-button`).classList;

  buttonElement.contains("is-toggled")
    ? buttonElement.remove("is-toggled")
    : buttonElement.add("is-toggled");
}
