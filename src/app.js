let todos = [];
let showbtn = document.querySelector("#showBtn");
let formContainer = document.querySelector("#formContainer");
let taskTitle = document.querySelector("#taskTitle");
let taskDate = document.querySelector("#taskDate");
let addTask = document.querySelector("#addTask");
let todoContainer = document.querySelector("#task-container");

showbtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
});
function isExist(task) {
  let result = todos.some((t) => t.title === task.title);

  return result;
}
function renderTodos() {
  todoContainer.innerHTML = "";
  let status = "";
  todos.forEach((todo, index) => {
    if (todo.status === "done") {
      status = "bg-green-50 border-green-400";
    } else {
      status = " border-neutral-200 bg-white";
    }
    console.log(status);
    let div = document.createElement("div");

    div.innerHTML = ` <div
          class="w-full mx-auto border mt-3 rounded-lg px-2 py-3 ${status}"
        >
          <p class="text-xl font-bold">title:-${todo.title}</p>
          <p class="text-lg">Due Date:-${todo.dueDate}</p>
          <div class="flex justify-end py-2 px-2 rounded-lg ${
            todo.status === "done"
              ? "bg-green-500 text-green-500"
              : "bg-red-500 text-red-400"
          }">completed</div>

          <div class="flex gap-4">
            <button
      data-id="${index}"
              id="task-complete"
              class="text-neutral-400 hover:text-green-600 flex gap-3 font-light mt-2 text-sm items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                />
                <path
                  d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                />
              </svg>
              <span class="text-lg">Mark as done</span>
            </button>
            <button
          data-id="${index}"
              id="task-delete"
              class="text-neutral-400 hover:text-red-500 flex gap-3 font-light mt-2 text-sm items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                />
              </svg>
              <span class="text-lg">Delete</span>
            </button>
          </div>
        </div>`;
    todoContainer.appendChild(div);
  });
  let todoComplete = document.querySelectorAll("#task-complete");
  let todoDelete = document.querySelectorAll("#task-delete");

  todoComplete.forEach((taskCompleted) => {
    taskCompleted.addEventListener("click", (e) => {
      let index = e.currentTarget.getAttribute("data-id");
      console.log(index);
      let todo = todos[index];
      todo.status = "done";

      renderTodos();
    });
  });
  todoDelete.forEach((taskDelete) => {
    taskDelete.addEventListener("click", (e) => {
      let index = e.currentTarget.getAttribute("data-id");
      todos.splice(index, 1);
      renderTodos();
    });
  });
}
addTask.addEventListener("click", () => {
  let date = new Date(taskDate.value).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  let task = {
    title: taskTitle.value,
    dueDate: date,
  };
  if (!isExist(task)) {
    todos.push(task);
    renderTodos();
  } else {
    alert("Alredy Present");
  }

  console.log("ouotu=>>", todos);
});
