function changeColor() {
  var listers = document.getElementsByClassName("list-item");
    listers.setAttribute("purple");
    listers.remove("onclick");
}

function backToBlack() {
 var listers = document.getElementsByClassName("list-item");
   listers.remove("purple");
   listers.setAttribute("onclick");
}
