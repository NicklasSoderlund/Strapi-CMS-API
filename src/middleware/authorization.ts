import {Request, Response, NextFunction} from 'express'
import * as utils from '../utils/accountUtils'

declare module 'express-serve-static-core' {
    export interface Request {
      user: any
    }
  }


export const authorizeUser = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization

    if (token && utils.verifyJWT(token)) {
        const tokenData = utils.decodeJWT(token)
        req.user = tokenData
        req.user.isLoggedIn = true

    } else {
        req.user = { isLoggedIn: false }
    }
    next();
}


export const forceAuthorize = (req:Request, res:Response, next:NextFunction) => {
    if (req.user.isLoggedIn) {
        next()
    } else {
        res.sendStatus(401)
    }
}