const router = require('express').Router();
const Todo = require("../models/Todo");

router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});

    newTodo.save().then(() => res.redirect("/")).catch((err) => console.log(err));
    
}).delete("/delete/todo/:_id", async(req, res) =>{
    const {_id} = req.params;
    await Todo.deleteOne({_id}).then(() => res.redirect("/")).catch((err) => console.log(err));

}).put("/edit/todo/:id", async(req, res) =>{
    const {id} = req.params;
    let updatedTodo = {};
    if(req.body.todo) updatedTodo.todo = req.body.todo;
    updatedTodo = {$set: updatedTodo};
    await Todo.updateOne({_id: id}, updatedTodo).then(() => res.redirect("/")).catch((err) => console.log(err));
});

module.exports = router;