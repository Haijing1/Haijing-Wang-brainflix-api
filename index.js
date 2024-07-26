import express from "express";
import videoIdRouter from "./routes/videos.js"

const app = express();
const PORT = 8080;

app.use("/videos/videoId", videoIdRouter);

app.get("/videos", (_req, res) => {
    res.send("Welcome");
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
})