const todoInput = document.querySelector("input");
const todo = document.querySelector(".todo-box");
const submitBtn = document.getElementById("submitBtn");
const todoForm = document.querySelector("#inputForm");
const todoList = document.querySelector(".todoList");
const submit = document.querySelector(".submit");
const allselect = document.querySelector(".click_txt .all");
const alldelete = document.querySelector(".click_txt .delete");
let todos = [];

submit.addEventListener("click", () => {
  console.log(submitBtn.value);
  const submitBtn_value = submitBtn.value;
  const ul = document.createElement("ul");
  const input = document.createElement("input");
  const li = document.createElement("li");
  const button = document.createElement("button");
  ul.className = "todoList";
  todo.append(ul);
  input.type = "checkbox";
  ul.append(input);
  ul.append(li);
  li.innerHTML = submitBtn.value;

  button.className = "x_btn";
  ul.append(button);
  button.innerHTML = "X";

  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
  input.addEventListener("click", () => {
    if (input.checked == true) {
      console.log("checked");
      li.style.textDecoration = "line-through";
    } else {
      console.log("checked");

      li.style.textDecoration = "none";
    }
  });
});

allselect.addEventListener("click", () => {
  const checkboxs = document.querySelectorAll(".todoList input");
  checkboxs.forEach(function (item) {
    item.checked = true;
    item.nextElementSibling.style.textDecoration = "line-through";
  });
});

alldelete.addEventListener("click", () => {
  const todoLists = document.querySelectorAll(".todoList");
  todoLists.forEach(function (item) {
    item.remove();
  });
});
