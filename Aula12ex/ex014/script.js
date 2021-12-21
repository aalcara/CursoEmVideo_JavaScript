function carregar () {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()
  // var hora =22
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    img.src = "morning.png"
    document.body.style.background = 'white'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'afternoon.png'
    document.body.style.background = '#ec855b'
  } else {
    img.src = 'night.png'
    document.body.style.background = '#01386b'
  }
}