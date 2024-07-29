// import exporess and initialize router
import express from "express"
const router = express.Router();

import fs from "fs";
import { v4 as uuid } from "uuid";

const videosBuffer = fs.readFileSync("./data/videos.json");
const videos = JSON.parse(videosBuffer);

router.get("/", (_req, res) => {
    const updatedVideos = videos.map((video) => {
        return { id: video.id, title: video.title, channel: video.channel, image: video.image };
    });
    res.send(updatedVideos);
});

router.get("/:videoId", (req, res) => {
    const { videoId } = req.params;
    const foundVideo = videos.find((video) => {
        return video.id === videoId;
    });

    if (!foundVideo) {
        res.status(404).send("Compliment not found the id")
    }
    res.send(foundVideo);
});

router.post("/", (req, res) => {
    const newVideo = {
        id: uuid(),
        title: req.body.title,
        channel: "Haijing Wang",
        image: "Upload-video-preview.jpg",
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "0:00",
        video: "",
        timestamp: Date.now(),
        comments: []
    }
    videos.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
    res.send(videos)
});

export default router;
