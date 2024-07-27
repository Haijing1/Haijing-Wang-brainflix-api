// import exporess and initialize router
import express from "express"
const router = express.Router();

import fs from "fs";


router.get("/", (req, res) => {
    // const videosBuffer = fs.readFileSync("./data/videos.json");

    // res.send(videosBuffer);

    res.send("Welcome");
});

export default router;