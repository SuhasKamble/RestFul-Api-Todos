const mongoose = require("mongoose");

const todosSchems = new mongoose.Schema({
    userId:{
        type:Number,
        required:true,
        default:"1",
    },
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true
        
    },
    completed:{
        type:Boolean,
        required:true
        
    }
})


const Todo = new mongoose.model("Todo",todosSchems);

module.exports = Todo;