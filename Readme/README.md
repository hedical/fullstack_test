# Intro to Node Servers

Date: Jun 08, 2020
N°: 26

# Content of class :

## SERVER Node

### Set up a server (non functional)

### STEPS :

1. initialize our package.json : npm init -y
2. install express : npm i express
3. create server.js and set it up
4. create client folder
5. create html file

```jsx
// Server.js
const express = require("express"); // I brought in Express
const app = express(); // I declare my App
const PORT = 3000; // I open a port 3000

app.listen(PORT, () => console.log(`listening on port: ${PORT}`)); // // FIRST ARGUMENT is the adress where it is listening, SECOND ARGUMENT is the callback
```

```jsx
//CLI
npm install -g nodemon // to get live server, and after each save, we get an update without relaunch the server
```

### Example to get it operational

```jsx
const express = require("express");
const app = express();
const PORT = 5000; // This line is important once we need to deploy our app
const path = require("path") // path is needed to facilitate the deployement when on HEROKU

**// APP USE to let our app use the right parameters to pass (string, arrays, json, path)**
app.use(express.urlencoded({ extended: true })) // let our app reiceve URLs as arrays and string
app.use(express.json()); // let our app reiceive JSON files
app.use(express.static("./client/")) // let our server know where are our file to pass. IF we already have an HTML file in it, it will understand to trigger this file automaticly

**// CLIENT ROUTE -> IT IS GOING TO GET BACK FILE TTO SHOW SOMETHING**
app.get("/", (req, res) => { // first one is for request, the second one is for result
    res.sendFile(path.join(__dirname + "./client/index.html")) // target the html file. 
})

**// API ROUTE -> IT IS GOING TO GET BACK DATA**
app.get("/api", (req, res) => { // "/api" is the endpoint, we have to add it at the end of our url "localhost:5000/api"
    res.json({ name: "Thomas" }) // we'll get back a json file in erturn
})

app.listen(PORT, () => console.log(`We are listening to http://localhost:${PORT}`)) // FIRST ARGUMENT is the adress where it is listening, SECOND ARGUMENT is the callback
```

## ORGANIZATION

### Folder organization

![Intro%20to%20Node%20Servers%20b828a8e330dc41a39358acb95077f4c7/Untitled.png](Intro%20to%20Node%20Servers%20b828a8e330dc41a39358acb95077f4c7/Untitled.png)

- It is good to separate the client and data routes, by creating  a route folder, with client-route.js
- It is also good to have all your client files (viewable by the user), like HTML files, in the same client

## CLIENT ROUTING

### Set up a router (client-route.js)

### Use the router in our server.js

```jsx
const express = require("express"); // bring in express
const router = express.Router(); // to be able to route
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/index.html"))
})

module.exports = router;
```

```jsx
const express = require("express");
const app = express();
const PORT = 4500;
const path = require("path")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-routes");

// we need to set up a middleware to be able to use clientRoutes
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`We are listening to http://localhost:${PORT}/api`))
```

## API ROUTING

### Set up API router (api-route.js)

### Use the router in our server.js

```jsx
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
```

```jsx
const express = require("express");
const app = express();
const PORT = 4500;
const path = require("path")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-routes"); // we need to set up a middleware to be able to use clientRoutes
app.use("/", clientRoutes);

**const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);**

app.listen(PORT, () => console.log(`We are listening to http://localhost:${PORT}`))
```

### Use the API (app.js)

```jsx
$(document).ready(function () {

    $("#btnSubmit").on("click", () => {
        $.ajax({
            type: "GET",
            url: "/api/test",
            dataType: "json",
        }).then((res) => {
            console.log(res);
        })
    })
})
```

---

# Tips :

<VSCode> Fermer le serveur en tappant CTRL + C

---

# Todo:

- [ ]  LOOK AT MVC MODULE VIEWER CONTROLLER

---

[External Ressources](https://www.notion.so/9cb0e870c3a64b658ceae71c26a3da89)

# **Intro to Node Servers**
