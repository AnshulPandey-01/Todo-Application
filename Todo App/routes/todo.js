const router = require('express').Router();
const Todo = require("../models/Todo");
const requireLogin = require('../middleware/requireLogin');

router.get("/home", requireLogin, async(req, res) => {
    const allTodo = await Todo.find({email: req.user.email});
    res.render("index", {todo: allTodo, user: req.user});
})
.post("/add/todo", requireLogin, (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo, email: req.user.email});

    newTodo.save().then(() => res.redirect("/home")).catch((err) => console.log(err));
})
.delete("/delete/todo/:_id", requireLogin, async(req, res) => {
    const {_id} = req.params;
    await Todo.deleteOne({_id}).then(() => res.json({redirect: "/home"})).catch((err) => console.log(err));
})
.put("/edit/todo/:_id", requireLogin, async(req, res) => {
    const {_id} = req.params;
    let updatedTodo = {};
    if(req.body.todo) updatedTodo.todo = req.body.todo;
    updatedTodo = {$set: updatedTodo};
    await Todo.updateOne({_id}, updatedTodo).then(() => res.redirect("/home")).catch((err) => console.log(err));
});

module.exports = router;