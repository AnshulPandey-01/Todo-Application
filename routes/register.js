const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.get("/register", (req, res) => {
    res.sendFile("/HTML/register.html", {root: "public"})
})
.post("/registerUser", (req, res) => {
    bcrypt.hash(req.body.password, 12).then(hashedpassword => {
        const newUser = new User({
            firstName : req.body.first_name,
            lastName : req.body.last_name,
            email : req.body.email,
            password : hashedpassword
        });
        newUser.save().then(() => res.redirect("/")).catch((err) => console.log(err));
    })
})

module.exports = router;

