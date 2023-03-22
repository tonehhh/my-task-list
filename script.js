// select the input, add button and list elements
const inputText = document.querySelector("#text");
const addButton = document.querySelector(".add-task");
const list = document.querySelector(".container ul");

// define an array of gradient color combinations
const gradients = [
  ["#f9d29d", "#ffebb7"],
  ["#d3c7f3", "#f4e4f3"],
  ["#9ad3bc", "#c1e1bd"],
  ["#f7d4c6", "#f7b1ab"],
  ["#f9d5e5", "#f0c1d8"],
  ["#c0e5ec", "#f8d5e1"],
];

// generate a random number to select a gradient from the array
const randomGradient = Math.floor(Math.random() * gradients.length);

// set the gradient as the background of the body element
document.body.style.background = `linear-gradient(60deg, ${gradients[randomGradient][0]}, ${gradients[randomGradient][1]})`;

// render existing tasks from localStorage
window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    // create a new list item for each task
    const listItem = document.createElement("li");
    listItem.className = "task";
    listItem.textContent = task.text;
    list.appendChild(listItem);

    // add a checkbox and delete button to each list item
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "completed";
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);

    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "X";
    listItem.appendChild(deleteSpan);

    // set the decoration of the list item based on its completion status
    if (checkbox.checked) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }
  });
});

// add new task to localStorage
function addTaskToLocalStorage() {
  // check if the input is not empty
  if (inputText.value.trim() !== "") {
    // create a new list item for the task and add it to the list
    const listItem = document.createElement("li");
    listItem.className = "task";
    listItem.textContent = inputText.value.trim();
    list.appendChild(listItem);

    // add a checkbox and delete button to the list item
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "completed";
    listItem.appendChild(checkbox);

    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "X";
    listItem.appendChild(deleteSpan);

    // add the new task to the tasks array in localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: inputText.value.trim(), completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // clear the input field
  inputText.value = "";
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskToLocalStorage();
});

// update completion status in localStorage
list.addEventListener("change", (e) => {
  if (e.target.classList.contains("completed")) {
    // update the completion status of the task in the tasks array in localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = [...list.children].indexOf(e.target.parentElement);
    tasks[index].completed = e.target.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // set the decoration of the list item based on its completion status
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
    // remove the task from the tasks array in localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = [...list.children].indexOf(e.target.parentElement);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // fade out and remove the list item
    e.target.parentElement.style.opacity = 0;
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
      e.target.parentElement.remove();
    }, 500);
  }
});
