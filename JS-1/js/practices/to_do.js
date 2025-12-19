const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");



function addTodo() {
    const text = input.value;

    if (text === "") {
        alert("please enter text");
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    input.value = "";
}

button.addEventListener("click", addTodo);