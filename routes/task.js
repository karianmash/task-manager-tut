const express = require("express");
const router = express.Router();

const TasksController = require("../controllers/tasks");

// create task
router.post("/create", TasksController.createTask);

// get single task
router.get("/allTasks/:taskId", TasksController.singleTask);

// get all tasks
router.get("/allTasks", TasksController.allTasks);

// update task
router.put("/updateTask", TasksController.updateTask);

// delete task
router.delete("/:taskId", TasksController.deleteTask);

module.exports = router;
