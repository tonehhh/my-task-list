const inputText = document.querySelector("#text");
const addButton = document.querySelector(".add-task");
const list = document.querySelector(".container ul");

// render existing tasks from localStorage
window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = "task";
    listItem.textContent = task.text;
    list.appendChild(listItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "completed";
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);

    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "X";
    listItem.appendChild(deleteSpan);

    if (checkbox.checked) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }
  });
});

// add new task to localStorage
function addTaskToLocalStorage() {
  if (inputText.value.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.className = "task";
    listItem.textContent = inputText.value.trim();
    list.appendChild(listItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "completed";
    listItem.appendChild(checkbox);

    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "X";
    listItem.appendChild(deleteSpan);

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: inputText.value.trim(), completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  inputText.value = "";
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskToLocalStorage();
});

// update completion status in localStorage
list.addEventListener("change", (e) => {
  if (e.target.classList.contains("completed")) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = [...list.children].indexOf(e.target.parentElement);
    tasks[index].completed = e.target.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (e.target.checked) {
      e.target.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.parentElement.style.textDecoration = "none";
    }
  }
});

// remove task from localStorage
list.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = [...list.children].indexOf(e.target.parentElement);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    e.target.parentElement.style.opacity = 0;
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
      e.target.parentElement.remove();
    }, 500);
  }
});
