import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },
    description: {
        type : String,
        required : true,
    },
    status: {
        type : String,
        default : "pending",
    },
    createdBy: {
        type : mongoose.ObjectId,
        readOnly : true,
        ref : "User" ,
    }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;