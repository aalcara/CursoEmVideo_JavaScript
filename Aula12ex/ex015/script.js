var button = window.document.querySelector("input#verifybutton")

button.addEventListener('click', verify)
button.addEventListener('mouseenter', change_color)
button.addEventListener('mouseout', change_back_color)


function change_color() {
  button.style.background = "rgb(101, 116, 184)"
}
function change_back_color() {
  button.style.background = "rgb(17, 42, 153)"
}

function verify() {
  var result = window.document.getElementById("result")
  var txtano = window.document.getElementById("txtano")
  var ano = Number(txtano.value)
  var date = new Date()
  var idade = date.getFullYear() - ano
  var sex = window.document.getElementsByName("radsex")
  var gender
  var img = window.document.createElement("img")
  img.setAttribute('id', 'foto')
  if (sex[0].checked) {
    gender = "Homem"
    if (idade < 18) {
      img.setAttribute('src', 'masc_crianca.png')
    } else if (idade <= 60) {
      img.setAttribute('src', 'masc_adulto.png')
    } else {
      img.setAttribute('src', 'masc_idoso.png')
    }
  } else {
    gender = "Mulher"
    if (idade < 18) {
      img.setAttribute('src', 'fem_crianca.png')
    } else if (idade <= 60) {
      img.setAttribute('src', 'fem_adulto.png')
    } else {
      img.setAttribute('src', 'fem_idoso.png')
    }
  }

  result.style.textAlign = 'center'
  if (idade > 0 && ano != 0) {
    result.innerHTML = `<p>É <b>${gender}</b> de <b>${idade}</b> anos!</p>`
    result.appendChild(img)
  } else {
    result.innerHTML = "Erro, Ano inválido!"
  }
}