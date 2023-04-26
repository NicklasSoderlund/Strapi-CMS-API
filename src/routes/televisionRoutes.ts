import express from "express";
import * as televisionController from "../controllers/televisionController";
import { forceAuthorize } from "../middleware/authorization";


// -----------------TELEVISIONS-----------------

const televisionRouter = express.Router();

// GET

televisionRouter.get('/televisions', forceAuthorize, televisionController.getAll);

televisionRouter.get('/televisions/:id', forceAuthorize, televisionController.getById);

// POST 

televisionRouter.post('/televisions', forceAuthorize, televisionController.post);

// PUT / UPDATE

televisionRouter.put('/televisions/:id', forceAuthorize, televisionController.update);

export default televisionRouter