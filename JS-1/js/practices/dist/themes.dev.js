"use strict";

var btn = document.getElementById("theme_btn");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark_theme");

  if (document.body.classList.contains("dark_theme")) {
    btn.textContent = "switch to light";
  } else {
    btn.textContent = "switch to dark";
  }
});