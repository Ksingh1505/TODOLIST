let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];

const taskList = document.getElementById("taskList");
const todoForm = document.getElementById("todoForm");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskName = document.querySelector("#task").value.trim();
  const taskpriority = document.querySelector("#priority").value;

  if (!taskName || !taskpriority) return;

  const taskObj = { taskName, taskpriority };
  todoArr.push(taskObj);
  localStorage.setItem("todo", JSON.stringify(todoArr));
  displayTasks();
  todoForm.reset();
});

function displayTasks() {
  taskList.innerHTML = "";
  todoArr.forEach((el, i) => {
    const card = document.createElement("div");
    card.className = "task-card";

    const title = document.createElement("div");
    title.className = "task-title";
    title.innerText = el.taskName;

    const pr = document.createElement("div");
    pr.className = "priority " + (el.taskpriority.toLowerCase());
    pr.innerText = el.taskpriority;

    const actions = document.createElement("div");
    actions.className = "actions";

    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn";
    favBtn.innerText = "❤️ Fav";
    favBtn.onclick = function () {
      favArr.push(el);
      localStorage.setItem("fav", JSON.stringify(favArr));
      alert("Added to Favourites!");
    };

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerText = "🗑️ Delete";
    delBtn.onclick = function () {
      todoArr.splice(i, 1);
      localStorage.setItem("todo", JSON.stringify(todoArr));
      displayTasks();
    };

    actions.append(favBtn, delBtn);
    card.append(title, pr, actions);
    taskList.append(card);
  });
}

displayTasks();
