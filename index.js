import express from "express";
import videoIdRouter from "./routes/videosRouter.js"
import commentRouter from "./routes/commentsRouter.js"
import fs from "fs";
import cors from "cors"
import 'dotenv/config'

const app = express();

// process.env.CLINENT_URL

const PORT = process.env.PORT;
// const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/videos", videoIdRouter);
app.use("/videos", commentRouter);

app.get("/", (_req, res) => {
    res.send("Welcome");
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
})