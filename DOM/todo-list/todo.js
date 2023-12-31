const input = document.getElementById("task-content");
const button = document.getElementById("add-button");
const inboxSection = document.querySelector("#inbox");

function addToInbox() {
  const taskContent = input.value;
  if (taskContent !== "") {
    const task = document.createElement("p");
    // task.textContent = taskContent;
    task.innerHTML = `<span>${taskContent}</span> 
                    <button class="delete-button">x</button>`;
    inboxSection.appendChild(task);
    input.value = "";
  } else {
    alert("Ingresa una tarea válida");
  }
}

button.addEventListener("click", addToInbox);

function removeTask(e) {
  // console.log(e.target)
  if (e.target.className === "delete-button") {
    const removedTask = e.target.parentElement;
    // console.log(removedTask)
    inboxSection.removeChild(removedTask);
  }
}

inboxSection.addEventListener("click", removeTask);
