const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Todo = require("../models/todos")

// crate the todo 
router.post("/todos",async (req,res)=>{
    try{
        const newTodo = new Todo(req.body);
        const saveTodo = await newTodo.save();
        res.send(saveTodo);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

// get the all todos 
router.get("/todos",async(req,res)=>{
    try {
        const todos = await Todo.find({})
        res.send(todos)
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})

// get the particular todo by id
router.get("/todos/:id",async (req,res)=>{
    try{
        const _id =req.params.id;
        const todo = await Todo.findById(_id);
        res.send(todo)
        
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})


// update the todo 
router.patch("/todos/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updatedTodo = await Todo.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updatedTodo)
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})


// delete the todo 
router.delete("/todos/:id",async(req,res)=>{
    try {
        const _id =  req.params.id;
        const deleteTodo = await Todo.findByIdAndDelete(_id);
        res.send(deleteTodo)
    } catch (e) {
        console.log(e)
        res.status(400).send(e);   
    }
})


module.exports = router;