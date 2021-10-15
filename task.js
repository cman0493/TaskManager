const menu = `TASK MANAGER

What would you like to do:
"NEW" - Add A New Task
"TASKS" - Display All Tasks
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

const tasks = [`Charge MacBook`, `Master JavaScript`];

let showTasks = "";

let newTask;

let num;

let removed;

let userInput = prompt(menu);

while (userInput.toUpperCase() !== "CLOSE") {
  if (userInput.toUpperCase() === "TASKS") {
    for (task of tasks) {
      showTasks = showTasks + `${task}\n`
    }
    alert(showTasks);
    showTasks = "";
  } else if (userInput.toUpperCase() === "NEW") {
    newTask = prompt(`Please enter the new task:`);
    while (true) {
      if (newTask === "") {
        newTask = prompt(`Please enter the new task:`);
      } else {
        break;
      }
    }
    alert(`${newTask} has been added!`);
    tasks.push(newTask);
  } else if (userInput.toUpperCase() === "REMOVE") {
    while (true) {
      for (i = 0; i < tasks.length; i++) {
        showTasks = showTasks + `${i + 1}: ${tasks[i]}\n`;
      }
      num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
      if (num >= 0 && num < tasks.length) {
        removed = tasks.splice(num, 1);
        alert(`${removed[0]} has been removed`);
        showTasks = "";
        break;
      } else {
        alert(`Not a valid entry`);
        showTasks = "";
      }
    }
  }
  userInput = prompt(menu);
}
alert(`Thank you for using Task Manager!`);