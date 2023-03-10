export const logicImc = {
  weightInput: document.querySelector("#weight"),
  heightInput: document.querySelector("#height"),
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


