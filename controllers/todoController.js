import Todo from "../models/Todo.js";


const all_Todos = async (req, res) => {

    const allTodos = await Todo.find({ createdBy: req.user._id });
    if (allTodos.length === 0) {
        return res.status(400).json({ message: "No todos found" });
    }
    res.json({ allTodos });

};

const createTodo = async (req, res) => {
    let { title, description } = req.body;
    try {
        if (!title || !description) {
            throw new Error("Title and description are required");
        }
        const newTodo = new Todo({ ...req.body });

        newTodo.createdBy = req.user._id;

        await newTodo.save();
        res.status(201).json({ newTodo });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const showTodo = async (req, res) => {
    let { id } = req.params;
    try {
        const todo = await Todo.findById(id);

        if (!todo.createdBy.toString() === req.user._id.toString()) {
            throw new Error("You are not authorized to view this todo.");
        }
        if (!todo) {
            throw new Error("Todo does not exists.");
        }
        res.status(200).json({ searchedTodo: todo });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const updateTodo = async (req, res) => {
    let { id } = req.params;
    try {
        const currentTodo = await Todo.findById(id);
        if (!currentTodo.createdBy === req.user._id) {
            throw new Error("You are not authorized to update this todo.");
        }
        if (currentTodo === null) {
            throw new Error("Todo does not exists.");
        }
        const updatedTodo = await Todo.findByIdAndUpdate(id, { ...req.body }, { new: true });

        if (!updatedTodo) {
            return res.status(400).json({ success: false, message: "ERROR in updating the todo" });
        }
        res.json({ success: true, message: "Todo updated successfully", updatedTodo: updatedTodo });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {

    let { id } = req.params;
    // await Todo.deleteMany({"createdBy": null});
    // res.json({ message: "All todos deleted successfully!" });
    try {
        const todo = await Todo.findById(id);
        if (todo === null) {
            throw new Error("Todo does not exists.");
        }
        if (!todo.createdBy.toString() === req.user._id.toString()) {
            throw new Error("You are not authorized to delete this todo.");
        }
        res.json({ success: true, message: `${todo.title} deleted successfully!`, deletedTodo: todo });
        await Todo.findByIdAndDelete(id);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export { all_Todos, createTodo, showTodo, updateTodo, deleteTodo };