import { Request, Response} from "express";
import * as service from "../services/accountService";
import * as utils from "../utils/accountUtils";

// REGISTER USER IN DATABASE

export const register = (req:Request, res:Response) => {
    
    const { username, password } = req.body
    const hashedPassword = utils.hashPassword(password)

   service.registerUser(username, hashedPassword, (err:Error | null, success:any) => {
      if (err) {
        res.status(500).send(err)
      }
      else {
        res.sendStatus(200)
      }
   })

}

// LOG IN USER

export const login = (req:Request, res:Response) => {

    const { username, password } = req.body
    
    service.getAccountByUsername(username, (err:Error | null, account:any) => {

       if (err) {
            res.status(500).send(err)
      } 
         else if (account) {
            const correctPassword = utils.comparePassword(password, account.hashedPassword)

            if (correctPassword) {
                const jwtToken = utils.getJWT(account)
                res.send(jwtToken)
            } else {
                res.sendStatus(404)
            }
       } 
      else {
         res.sendStatus(404)
      }
    

    })

}