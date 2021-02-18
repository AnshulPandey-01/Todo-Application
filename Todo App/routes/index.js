const router = require('express').Router();

router.get("/", async(req, res) => {
    res.sendFile("/HTML/login.html", {root: "public"})
});

module.exports = router;