import express from "express";
import songs from "./db/songs.js";
import cors from "cors";
import PinoHttp from "pino-http";

const app = express(); // app - web server

app.use(cors());
const logger = PinoHttp({
  transport: {
    target: "pino-pretty",
  },
});
app.use(logger);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.use((req, res) => {
  res.status(404).json({
    message: `${req.url} not found`,
  });
});

app.listen(3000, () => console.log("server running on 3000 port"));
