// 3. Your `htmlRoutes.js` file should include two
// routes:

//    * A GET Route to `/survey` which should display
//the survey page.
//    * A default, catch-all route that leads to
// `home.html` which displays the home page.const express = require("express");

const express = require("express");
const path = require("path");
const router = express.Router();
const friends = require("../friends");

// Routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;