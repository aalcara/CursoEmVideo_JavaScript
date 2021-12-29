var button = window.document.querySelector("input#verifybutton")

button.addEventListener('click', calcular)
button.addEventListener('mouseenter', change_color)
button.addEventListener('mouseout', change_back_color)
function change_color() {
  button.style.background = "rgb(101, 116, 184)"
}
function change_back_color() {
  button.style.background = "rgb(17, 42, 153)"
}


function calcular() {
  var txti = window.document.getElementById("inicio").value
  var txtf = window.document.getElementById("fim").value
  var txtp = window.document.getElementById("passo").value
  var inicio = Number(txti)
  var fim = Number(txtf)
  var passo = Number(txtp)
  var result = window.document.getElementById("result")
  if (txti.length == 0 || txtf.length == 0 || txtp.length == 0 ) {
    window.alert("[ERRO] Faltam dados!")
    result.innerHTML = "<p>Impossível Calcular!</p>"
  } else {
    if (passo <= 0) {
      window.alert("Passo inválido. Considerando passo = 1")
      passo = 1
    }
    var valor = inicio
    result.innerHTML = "<p>Calculando:</p>"

    var calc = window.document.createElement("div")
    calc.setAttribute('id', 'calc')
    if (valor <= fim) {
      while (valor <= fim) {
        calc.innerHTML += `${valor} `
        calc.innerHTML += "👉 "
        valor += passo
      }
    } else {
      while (valor >= fim) {
        calc.innerHTML += `${valor} `
        calc.innerHTML += "👉 "
        valor -= passo
      }
    }
    calc.innerHTML += "🏁"
    result.appendChild(calc)
  }
}