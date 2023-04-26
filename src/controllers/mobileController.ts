import * as service from "../services/mobileService";
import { Request, Response} from "express";

// GET ALL MOBILES

export const getAll = async (req:Request  , res:Response) => {

const mobiles = await service.getAllMobiles();

 if (mobiles) {
    res.send(mobiles)
 }
 else {
    res.sendStatus(500)
 }
}

// GET MOBILE BY ID

export const getById = async (req:Request  , res:Response) => {

    const id = req.params.id

    const mobile = await service.getMobileById(id);

    if (mobile) {
       res.send(mobile)
    }
    else {
        res.sendStatus(500)
    }
}

// POST MOBILE

export const post = async (req:Request  , res:Response) => {
   
    const {name, description, manufacturer, price, screen_type} = req.body;

    const response = await service.postMobile(name, description, manufacturer, price, screen_type);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }
}

// UPDATE MOBILE (PUT)

export const update = async (req:Request  , res:Response) => {

    const {name, description, manufacturer, price, screen_type} = req.body;
    const id = req.params.id

    const response = await service.updateMobile(name, description, manufacturer, price, screen_type , id);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }

}
    