//import express
const express = require("express");
// init express
const app = express();
const spotifyRouter = require("./routers/playlist.route");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// basic route

app.use("/", spotifyRouter);

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
