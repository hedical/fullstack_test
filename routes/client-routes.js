const express = require("express"); // bring in express
const router = express.Router(); // to be able to route
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/index.html"))
})


module.exports = router;