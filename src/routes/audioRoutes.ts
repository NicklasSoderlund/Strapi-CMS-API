import express from "express";
import * as audioController from "../controllers/audioController";
import { forceAuthorize } from "../middleware/authorization";

// -----------------AUDIO-----------------

const audioRouter = express.Router();

// GET

audioRouter.get('/audio', forceAuthorize, audioController.getAll);

audioRouter.get('/audio/:id', forceAuthorize, audioController.getById);

// POST 

audioRouter.post('/audio', forceAuthorize, audioController.post);

// PUT / UPDATE

audioRouter.put('/audio/:id', forceAuthorize, audioController.update);

export default audioRouter
