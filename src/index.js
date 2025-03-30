import express from "express";
import songs from "./db/songs.js";

const app = express(); // app - web server

app.set("json spaces", 8);

app.get("/", (request, response) => {
  response.send("<h1>Home page</h1>");
});

app.get("/contacts", (request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.send("<h1>Contacts Page</h1>");
});

app.get("/songs", (req, res) => {
  res.json(songs);
  // res.send(songs);
});

app.listen(3000, () => console.log("server running on 3000 port"));
