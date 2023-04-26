import express from "express";
import * as computerController from "../controllers/computerController";
import { forceAuthorize } from "../middleware/authorization";

const computerRouter = express.Router();


// -----------------COMPUTERS-----------------


// GET

computerRouter.get('/computers', forceAuthorize, computerController.getAll);

computerRouter.get('/computers/:id', forceAuthorize, computerController.getById);

// POST 

computerRouter.post('/computers', forceAuthorize, computerController.post);

// PUT / UPDATE

computerRouter.put('/computers/:id', forceAuthorize, computerController.update);

export default computerRouter