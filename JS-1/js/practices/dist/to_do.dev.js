"use strict";

var input = document.getElementById("todoInput");
var button = document.getElementById("addBtn");
var list = document.getElementById("todoList");

function addTodo() {
  var text = input.value;

  if (text === "") {
    alert("please enter text");
    return;
  }

  var li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
}

button.addEventListener("click", addTodo);