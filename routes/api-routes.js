const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => { // FIRST ENDPOINT
    console.log("api has been hit"); // when someone hit the API, this message is triggered. When you refresh, it will also be triggered
    // res.send("<h1>hello from API</h1>") // it is possible to set some text on the page using "send"
    res.json({ mess: "Hello from the api" })
})

router.get("/api/test2", (req, res) => { // SECOND ENPOINT
    console.log("api has been hit 2"); // when someone hit the API, this message is triggered. When you refresh, it will also be triggered
    res.json({ mess: "Hello from the api, the second" })
})

module.exports = router;