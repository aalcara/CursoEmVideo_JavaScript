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
