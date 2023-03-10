export const screen = {
  error: document.querySelector(".alert"),
  result: document.querySelector(".modal-wrapper"),

  toogleScreen() {
    screen.result.classList.toggle("modal-hide")
  },
  dataValidation(imc, classificationImc) {
    if (isNaN(imc) || classificationImc == "NULL") {
      screen.error.innerText = "Digite somente números"
      screen.error.classList.add("hide-alert")
    } else if (imc == "Infinity" || imc == 0) {
      screen.error.innerText = "Digite o peso e a altura"
      screen.error.classList.add("hide-alert")
    } else {
      screen.error.classList.remove("hide-alert")
      screen.toogleScreen()
    }
  },
  handleKeydown(event) {
    if (
      event.key === "Escape" &&
      screen.result.classList.contains("modal-hide")
    ) {
      screen.toogleScreen()
    }
  },
}
