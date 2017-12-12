var tasks = [];

var todoInput = document.getElementById("todo-input");

document.getElementById("todo-submit-button").addEventListener("click", function() {
  var task = todoInput.value;

  //clearing the input
  todoInput.value = "";

  //adding to list
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  var listElement = document.createElement("li");
  listElement.appendChild(checkbox);

  var text = document.createTextNode(task);
  listElement.appendChild(text);
  document.getElementById("todo-list").appendChild(listElement);

  t = new Task(listElement, checkbox);
  tasks.push(t);

  //updating number of tasks
  updateTasksCompletedCount();
});

function Task(task, checkbox) {
  this.task = task;
  this.checkbox = checkbox;
  var time = new Date();
  this.timeStamp = time.getTime();
  
  checkbox.addEventListener("click", function() {
    if (this.checked) {
      checkbox.parentElement.style.textDecoration = "line-through";
    }
    else {
      checkbox.parentElement.style.textDecoration = "none";
    }

    updateTasksCompletedCount();
  });
}

function updateTasksCompletedCount() {
  var count = 0;

  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].checkbox.checked) {
      count += 1;
    }
    var output = count + "/" + tasks.length;
    document.getElementById("output-todo-status").value = output;
  }
}
