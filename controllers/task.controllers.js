let tasks = [
  {
    taskId: 1,
    title: "Task 1",
    description: "This is task 1",
  },

  {
    taskId: 2,
    title: "Task 2",
    description: "This is task 2",
  },

  {
    taskId: 3,
    title: "Task 3",
    description: "This is task 3",
  },
];

// create task
exports.createTask = (req, res, next) => {
  const task = req.body;

  // Generate id
  let taskId = tasks.length + 1;

  let newTask = { taskId, ...task };

  tasks.push(newTask);

  console.table(tasks);

  res.status(201).json({
    message: "Task created successfully!",
    task: newTask,
  });
};

// get all tasks
exports.allTasks = (req, res, next) => {
  console.table(tasks);

  res.status(200).json(tasks);
};

// get a single task
exports.singleTask = (req, res, next) => {
  // extract id from the URL
  let taskId = req.params.taskId;

  // find an array with a matching ID
  let task = tasks.find((task) => task.taskId == taskId);

  // check if task exists
  if (!task) {
    res.status(404).json({ message: "Task not found!" });
  }

  // return task if exists
  res.status(200).json(task);
};

// update a task
exports.updateTask = (req, res, next) => {
  // extract from the request body
  let { taskId, ...rest } = req.body;

  // check if task exists
  let foundTask = tasks.find((task) => task.taskId == taskId);

  if (!foundTask) {
    res.status(404).json({ message: "Task not found!" });
  }

  updatedTask = { taskId, ...rest };

  // find a task's index
  let taskIndex = tasks.findIndex((task) => task.taskId == taskId);

  // remove the old task and replace it with the new one at the same index
  // position
  tasks.splice(taskIndex, 1, updatedTask);

  res.status(201).json({
    message: "Task updated successfully!",
  });
};

// delete a task
exports.deleteTask = (req, res, next) => {
  let taskId = req.params.taskId;

  let foundTask = tasks.find((task) => task.taskId == taskId);

  if (!foundTask) {
    res.status(404).json({ message: "Task not found!" });
  }

  let taskIndex = tasks.findIndex((task) => task.taskId == taskId);

  tasks.splice(taskIndex, 1);

  res.status(200).json({ message: "Task deleted successfully!" });
};
