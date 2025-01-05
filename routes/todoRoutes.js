import express from "express";
import Todo from "../models/Todo.js";
import { validateTodo } from "../middleware/validate.js";
import authenticateToken from "../middleware/auth.js";
import { all_Todos, createTodo, deleteTodo, showTodo, updateTodo } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", authenticateToken, all_Todos);

// CREATE TODO
router.post("/", authenticateToken, validateTodo, createTodo);

// SHOW TODO
router.get("/:id", authenticateToken, showTodo);

// UPDATE TODO
router.put("/:id", authenticateToken, validateTodo , updateTodo);


// DELETE TODO
router.delete("/:id", authenticateToken, deleteTodo);

export default router;