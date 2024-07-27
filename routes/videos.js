// import exporess and initialize router
import express from "express"
const router = express.Router();

import fs from "fs";


router.get("/", (req, res) => {
    // wipe this 2 line into a function:
    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);

    const updatedVideos = videos.map((video) => {
        return { id: video.id, title: video.title, channel: video.channel, image: video.image };
    });
    res.send(updatedVideos);
});

router.get("/:videoId", (req, res) => {
    // console.log(req.params.videoId);
    const { videoId } = req.params;

    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);

    const foundVideo = videos.find((video) => {
        return video.id === videoId;
    });

    if (!foundVideo) {
        res.status(404).send("Compliment not found the id")
    }
    res.send(foundVideo);
});

export default router;