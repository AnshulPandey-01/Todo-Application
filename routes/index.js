const router = require('express').Router();

router.get("/", async(req, res) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.clearCookie("Brearer");
    res.sendFile("/HTML/login.html", {root: "public"})
});

module.exports = router;
