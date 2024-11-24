// Grab elements from the DOM
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Event handler to add a new to-do item
addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();  // Get the input value and trim whitespace
    
    if (todoText === "") {
        alert("Please enter a to-do item.");
        return;
    }

    // Create new to-do element
    const todoItem = document.createElement("li");
    
    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    
    // Create text node for the to-do item
    const textNode = document.createTextNode(todoText);
    
    // Append the checkbox, text, and delete button to the list item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(textNode);
    todoItem.appendChild(deleteButton);
    
    // Add event listener to the checkbox to strike-through the text when checked
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            todoItem.classList.add("checked");
            moveToBottom(todoItem);
        } else {
            todoItem.classList.remove("checked");
        }
    });

    // Add event listener to the delete button to remove the item from the list
    deleteButton.addEventListener("click", () => {
        todoItem.remove();
    });

    // Append the new to-do item to the list
    todoList.appendChild(todoItem);
    
    // Clear input field after adding item
    todoInput.value = "";
});

// Function to move checked items to the bottom of the list
function moveToBottom(item) {
    todoList.appendChild(item);
}
