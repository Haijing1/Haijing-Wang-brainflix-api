import express from "express";
import videoIdRouter from "./routes/videos.js"
import fs from "fs";

const app = express();
const PORT = 8080;

app.use("/videos/videoId", videoIdRouter);

app.get("/videos", (_req, res) => {
    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);
    const updatedVideos = videos.map((video) => {
        return { id: video.id, title: video.title, channel: video.channel, image: video.image };
    });
    res.send(updatedVideos);
    // res.send("Welcome");
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
})