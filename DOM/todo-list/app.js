const input = document.getElementById("task-content");
const addButton = document.querySelector("#add-button");
const inboxSection = document.querySelector("#inbox");

function addToInbox() {
  const taskContent = input.value;
  if (taskContent !== "") {
    const task = document.createElement("p");
    //task.textContent = taskContent;
    task.innerHTML = `<span>${taskContent}</span> <button>X</button>`;
    inboxSection.appendChild(task);
    input.value = ""; 
  } else {
    alert("Ingresa una tarea valida");
  }
}

addButton.adddEventListener("click", addToInbox);

const deleteButton = document.getElementsByClassName("delete-button");

function deleteTask (event) {
    console.log(`${event.target}`);
}

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteTask);
}
