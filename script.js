function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task here!!!!!");
        return;
    }

    var taskList = document.getElementById("tasks");
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.onclick = function() {
        this.classList.toggle("completed");
    };

    
    taskList.appendChild(taskItem);
    input.value = "";
}
function reset() {
    var taskList = document.getElementById("tasks");
    taskList.innerHTML = "";
}