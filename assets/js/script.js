function loadMenu() {
  if (document.querySelector(".menu nav ul").style.display == "flex") {
    document.querySelector(".menu nav ul").style.display = null;
  } else {
    document.querySelector(".menu nav ul").style.display = "flex";
  }
}