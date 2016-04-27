

function changeColor(element) {
  element.classList.add("purple");
  element.setAttribute("onClick", "backToBlack(this);");
}

function backToBlack(element) {
  element.classList.remove("purple");
  element.setAttribute("onClick", "changeColor(this);");
}
