// 4. Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/friends`. This
//will be used to display a JSON of all possible 
//friends.

// * A POST routes `/api/friends`. This will be used
//to handle incoming survey results. This route will
//also be used to handle the compatibility logic.

const express = require("express");
const path = require("path");
const router = express.Router();
const data = require("../data");

//displays json at /api/friends url

router.get("/friends", (req, res) => {
    return res.json(data.friends);
});

//new users will be placed into this folder as well.
//new users will be dropped when a new server is created.

router.post("/friends", (req, res) => {
    const user = req.body;
    data.friends.push(user)
});

module.exports = router;