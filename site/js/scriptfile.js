/*function myFunction() {
    document.getElementById("dropdown").style.display = "flex";
}
*/

window.onclick = function(event) {
  if (!event.target.matches('.nav_tab_dropdown')) {
    document.getElementById("dropdown").style.display = "none";
  } else {
    document.getElementById("dropdown").style.display = "flex";
  }
}
