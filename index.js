const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/task");

const port = 8000;

// Create global app object
const app = express();

// Handle cors errors
app.use(cors());

// Parse incoming urlencoded and json bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle routes
app.get("/", (req, res) => {
  res.json({ message: "Hello and welcome to Task Manager!" });
});
app.use("/tasks", taskRoutes);

// Handle requests that cross past the above request handlers
app.use((req, res, next) => {
  const error = new Error("Route not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
  });
});

// open a server port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
