//Variables
const form = document.querySelector("form")
const buttonClose = document.querySelector(".close")

//Events
buttonClose.onclick = () => screen.toogleScreen()

//Function Submit
form.onsubmit = (event) => {
  event.preventDefault(event)

  let imc = logicImc.calculateImc()
  let classificationImc = logicImc.interpretationImc(imc)

  logicImc.dataPresentation(imc, classificationImc)

  screen.checkError(imc, classificationImc)
}

// Data structuring
// functions
const logicImc = {
  weightInput: form.querySelector("#weight"),
  heightInput: form.querySelector("#height"),
  textImc: document.querySelector(".modal-title"),
  textInterpretation: document.querySelector(".modal-text"),

  calculateImc() {
    return (
      logicImc.weightInput.value /
      (logicImc.heightInput.value / 100) ** 2
    ).toFixed(1) // IMC = Peso ÷ Altura² => obs:(altura em centimetros)
  },
  interpretationImc(imc) {
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
  },
  dataPresentation(imc, classificationImc) {
    logicImc.textImc.innerText = `Seu IMC é de ${imc}`
    logicImc.textInterpretation.innerText = classificationImc
  },
}

const screen = {
  error: document.querySelector(".alert"),
  result: document.querySelector(".modal-wrapper"),

  toogleScreen() {
    screen.result.classList.toggle("modal-hide")
  },
  checkError(imc, classificationImc) {
    if (imc == "NaN" || classificationImc == "NULL") {
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
}
