import express from "express";
import videoIdRouter from "./routes/videos.js"
import fs from "fs";
import cors from "cors"

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/videos", videoIdRouter);

app.get("/", (_req, res) => {
    res.send("Welcome");
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
})