let tasks = [];

// Add a new task
function addTask(description, priority) {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1; // Generate unique ID
    tasks.push({ id, description, priority });
    console.log(`Task added: ${description} (${priority})`);
}

// Display all tasks
function displayTasks() {
    console.clear();
    console.log("To-Do List:");
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
    });
}

// Delete a task by ID
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }
    tasks.splice(taskIndex, 1);
    console.log(`Task with ID ${id} deleted.`);
}

// Filter tasks by priority
function filterByPriority(priority) {
    console.clear();
    const filteredTasks = tasks.filter(task => task.priority === priority);
    console.log(`Tasks with priority: ${priority}`);
    if (filteredTasks.length === 0) {
        console.log("No tasks found.");
        return;
    }
    filteredTasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}`);
    });
}

// Interactive menu
function interactiveMenu() {
    let option;
    while (true) {
        option = prompt(`Choose an option:
1. Add Task
2. View All Tasks
3. Delete Task
4. Filter by Priority
5. Exit`);

        if (!option) {
            alert("Exiting due to no input.");
            break;
        }

        switch (option.trim()) {
            case '1': {
                const description = prompt("Enter task description:");
                if (!description || description.trim() === "") {
                    alert("Invalid description. Please try again.");
                    break;
                }
                const priority = prompt("Enter task priority (high, medium, low):").toLowerCase();
                if (!["high", "medium", "low"].includes(priority)) {
                    alert("Invalid priority. Please enter 'high', 'medium', or 'low'.");
                    break;
                }
                addTask(description.trim(), priority);
                break;
            }
            case '2':
                displayTasks();
                break;
            case '3': {
                const idToDelete = parseInt(prompt("Enter Task ID to delete:"));
                if (isNaN(idToDelete)) {
                    alert("Invalid ID. Please enter a valid number.");
                    break;
                }
                deleteTask(idToDelete);
                break;
            }
            case '4': {
                const priorityToFilter = prompt("Enter priority to filter (high, medium, low):").toLowerCase();
                if (!["high", "medium", "low"].includes(priorityToFilter)) {
                    alert("Invalid priority. Please try again.");
                    break;
                }
                filterByPriority(priorityToFilter);
                break;
            }
            case '5':
                alert("Exiting application. Goodbye!");
                return; // Exit the function to end the application
            default:
                alert("Invalid option. Please select a valid number between 1 and 5.");
        }
    }
}

// Call the interactive menu
interactiveMenu();
