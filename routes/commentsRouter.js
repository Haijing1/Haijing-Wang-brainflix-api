import express from "express"
const router = express.Router();

import fs from "fs";
import { v4 as uuid } from "uuid";

const videosBuffer = fs.readFileSync("./data/videos.json");
const videos = JSON.parse(videosBuffer);


router.post("/:videoId/comments", (req, res) => {
    const { videoId } = req.params;

    const foundVideo = videos.find((video) => {
        return video.id === videoId;
    });

    const newComment = {
        id: uuid(),
        name: "Haijing Wang",
        comment: req.body.comment,
        likes: "0",
        timestamp: Date.now()
    }

    foundVideo.comments.push(newComment);

    if (!foundVideo) {
        res.status(404).send("Compliment not found the id")
    }

    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
    res.send(foundVideo);
});


export default router;
