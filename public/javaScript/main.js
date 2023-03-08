//Variables
const form = document.querySelector("form")
const weightInput = form.querySelector("#weight")
const heightInput = form.querySelector("#height")
const buttonClose = document.querySelector(".close")

//screens
const screenError = document.querySelector(".alert")
const screenResult = document.querySelector(".modal-wrapper")

//logic
let textImc = document.querySelector(".modal-title")
let textInterpretation = document.querySelector(".modal-text")

//Events
buttonClose.addEventListener("click", reloadpage)

//Submit
form.onsubmit = (event) => {
  event.preventDefault(event)

  let weight = weightInput.value
  let height = heightInput.value

  let imc = calculateImc(weight, height)
  let classificationImc = interpretationImc(imc)

  textImc.innerHTML = `Seu IMC é de ${imc}`
  textInterpretation.innerHTML = classificationImc

  checkError(imc, classificationImc)
}

function calculateImc(weight, height) {
  let imc = weight / (height / 100) ** 2 // IMC = Peso ÷ Altura² => obs:(altura em metros)
  imc = imc.toFixed(1)
  return imc
}

function interpretationImc(imc) {
  //Classificacao IMC
  let skinny,
    normal,
    overweight,
    obesityOne,
    obesityTwo,
    severeObesity = false

  skinny = imc < 18.5 //magreza
  normal = imc >= 18.5 && imc <= 24.9 //normal
  overweight = imc >= 25 && imc <= 29.9 //sobrepeso
  obesityOne = imc >= 30 && imc <= 34.9 //obesidade I
  obesityTwo = imc >= 35 && imc <= 39.9 // Obesidade II
  severeObesity = imc > 40 // obesidade grave

  switch (true) {
    case skinny:
      return "Peso Baixo"
      break
    case normal:
      return "Peso normal ou adequado"
      break
    case overweight:
      return "Sobrepeso"
      break
    case obesityOne:
      return "Obesidade Grau I"
      break
    case obesityTwo:
      return "Obesidade Grau II"
      break
    case severeObesity:
      return "Obesidade Grau III ou Mórbida"
    default:
      return "NULL"
      break
  }
}

function toogleScreen() {
  screenResult.classList.toggle("modal-hide")
}

function reloadpage() {
  toogleScreen()
}

function checkError(imc, classificationImc) {
  if (imc == "NaN" && classificationImc == "NULL") {
    screenError.classList.add("hide-alert")
  } else {
    screenError.classList.remove("hide-alert")
    toogleScreen()
  }
}
