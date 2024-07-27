// import exporess and initialize router
import express from "express"
const router = express.Router();

import fs from "fs";
import { v4 as uuid } from "uuid";
// import { title } from "process";


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

router.post("/", (req, res) => {
    console.log("req.body", req.body);

    const newVideo = {
        id: uuid(),
        title: req.body.title,
        channel: req.body.channel,
        image: "Upload-video-preview.jpg"
    }

    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);

    videos.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
    // console.log(newVideo);
    res.send("post")
});


export default router;