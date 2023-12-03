document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Add task function
  window.addTask = function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create li element
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

      // Append delete button to li
      li.appendChild(deleteBtn);

      // Append li to task list
      taskList.appendChild(li);

      // Clear input
      taskInput.value = "";
    }
  };
});
