import { logicImc } from "../javaScript/logicImc.js"
import { screen } from "../javaScript/screen.js"

const form = document.querySelector("form")
const buttonClose = document.querySelector(".close")

buttonClose.onclick = () => screen.toogleScreen()
window.addEventListener("keydown", screen.handleKeydown)
window.addEventListener("input", screen.removeAlertOnInput)

form.onsubmit = (event) => {
  event.preventDefault(event)

  let imc = logicImc.calculateImc()
  let classificationImc = logicImc.interpretationImc(imc)

  logicImc.dataPresentation(imc, classificationImc)

  screen.dataValidation(imc, classificationImc)
}
