const express = require("express");
const router = express.Router();

const TasksController = require("../controllers/task.controllers");

// create task

// http://localhost:8000/tasks/create
router.post("/create", TasksController.createTask);

// get single task

// http://localhost:8000/tasks/allTasks/1
router.get("/allTasks/:taskId", TasksController.singleTask);

// get all tasks

// http://localhost:8000/tasks/allTasks
router.get("/allTasks", TasksController.allTasks);

// update task

// http://localhost:8000/tasks/updateTask
router.put("/updateTask", TasksController.updateTask);

// delete task

// http://localhost:8000/tasks/1
router.delete("/:taskId", TasksController.deleteTask);

module.exports = router;
