function toggleButton() {
  const buttonElement = document.querySelector(".js-gaming-button").classList;

  buttonElement.contains("is-toggled")
    ? buttonElement.remove("is-toggled")
    : buttonElement.add("is-toggled");
}
