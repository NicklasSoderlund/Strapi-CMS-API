import express from "express";
import * as accountController from "../controllers/accountController";

// -----------------ACCOUNT-----------------

const accountRouter = express.Router();

// REGISTER

accountRouter.post('/register', accountController.register)

// LOGIN

accountRouter.post('/login', accountController.login)

export default accountRouter