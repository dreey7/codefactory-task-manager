let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    const emptyMessage = document.getElementById("emptyMessage");

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span class="task-text">${escapeHtml(task.text)}</span>

            <div class="task-actions">

                <button
                    class="complete-button"
                    onclick="toggleTask(${index})">
                    ${task.completed ? "Desfazer" : "Concluir"}
                </button>

                <button
                    class="delete-button"
                    onclick="deleteTask(${index})">
                    Excluir
                </button>

            </div>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {

    const input = document.getElementById("taskInput");

    const text = input.value.trim();

    if (text === "") {
        alert("Digite uma tarefa.");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

function escapeHtml(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}

document
    .getElementById("taskInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            addTask();
        }

    });
renderTasks();