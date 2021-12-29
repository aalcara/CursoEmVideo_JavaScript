var button = window.document.querySelector("input#button")

button.addEventListener('click', calcular)
button.addEventListener('mouseenter', change_color)
button.addEventListener('mouseout', change_back_color)
function change_color() {
  button.style.background = "rgb(17, 42, 153)"
}
function change_back_color() {
  button.style.background = "rgb(101, 116, 184)"
}

function calcular () {
  var element_number = window.document.getElementById("number").value
  if (element_number == "") {
    window.alert("Insira um valor!")
    console.log("Vazio")
  } else {
    var caixa = window.document.getElementById("caixa")
    var nbr = Number(element_number)
    caixa.innerHTML = ""
    for (var c = 1; c <= 10; c++) {
      caixa.innerHTML += `<option>${nbr} x ${c} = ${nbr*c}`
    }
  }
  console.log(element_number)
}