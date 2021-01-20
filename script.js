const btn = document.getElementById("ham_icon");
btn.addEventListener("click", function () {
  const main__menu = document.getElementById("main__menu");
  main__menu.style.display = "block";
});

let edit = document.querySelector(".edit_btn");
edit.addEventListener("click", function () {
  const form = document.getElementById("main_form");
  form.style.display = "block";
});
