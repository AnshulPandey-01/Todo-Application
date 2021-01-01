const router = require('express').Router();
const Todo = require("../models/Todo");

router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    newTodo.save().then(() => res.redirect("/")).catch((err) => console.log(err));
    
}).get("/delete/todo/:_id", (req, res) =>{
    const {_id} = req.params;
    Todo.deleteOne({_id}).then(() => res.redirect("/")).catch((err) => console.log(err));
})

module.exports = router;