const btn = document.getElementById("menu__mobile__icon");
btn.addEventListener("click", function () {
  const main__menu = document.getElementById("main__menu");
  const main__title = document.getElementById("main__title");
  main__menu.style.display = "block";
  main__title.style.display = "none";
});
