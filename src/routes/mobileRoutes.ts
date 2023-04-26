import express from "express";
import * as mobileController from "../controllers/mobileController";
import { forceAuthorize } from "../middleware/authorization";

const mobileRouter = express.Router();

// -----------------MOBILES-----------------


// GET

mobileRouter.get('/mobiles', forceAuthorize, mobileController.getAll);

mobileRouter.get('/mobiles/:id', forceAuthorize, mobileController.getById);

// POST 

mobileRouter.post('/mobiles', forceAuthorize, mobileController.post);

// PUT / UPDATE

mobileRouter.put('/mobiles/:id', forceAuthorize, mobileController.update);

export default mobileRouter
