var buttonadd = window.document.getElementById('addbutton')
buttonadd.addEventListener('click', add)

var buttonfin = window.document.getElementById('finbutton')
buttonfin.addEventListener('click', finish)


var vetor = []

var lista = window.document.getElementById("lista")

function update_list(vetor) {
  lista.innerHTML = ''
  for (num in vetor) {
    lista.innerHTML += `<option>Valor ${vetor[num]} adicionado</option>`
  }
}

function add() {
  console.log("add")
  txtn = window.document.getElementById('txtn').value
  console.log(txtn)
  vetor.push(Number(txtn))
  console.log(vetor)
  update_list(vetor)

  


}


function finish() {
  console.log("finish")
}