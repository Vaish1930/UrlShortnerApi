import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import shortUrlRouter from "./routes/shortUrl.js";

import connectDb from "./config/db.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

connectDb();

app.get("/", (req, res) => res.status(200).send("Hello World"));
app.use("/api", shortUrlRouter);

app.listen(port, () => console.log(`Listening on localhost : ${port}`));
