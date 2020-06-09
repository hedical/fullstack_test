const express = require("express");
const app = express();
const PORT = 4500;
const path = require("path")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-routes"); // we need to set up a middleware to be able to use clientRoutes
app.use("/", clientRoutes);

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);


app.listen(PORT, () => console.log(`We are listening to http://localhost:${PORT}`))