const express = require('express');
const router = express.Router();

// All authors route
router.get("/", (req, res) => {
    res.render("authors/index");
});

//New author route
router.get("/new", (req, res) => {
    res.render("authors/new");
});

// Create author route
router.post("/", (req, res) => {
    res.send("Evo pajda evo svega");
})

module.exports = router;