import * as service from "../services/televisionService";
import { Request, Response} from "express";

// GET ALL AUDIO DEVICES

export const getAll = async (req:Request  , res:Response) => {

const televisions = await service.getAllTvs();

 if (televisions) {
    res.send(televisions)
 }
 else {
    res.sendStatus(500)
 }
}

// GET AUDIO DEVICE BY ID

export const getById = async (req:Request  , res:Response) => {

    const id = req.params.id

    const television = await service.getTvById(id);

    if (television) {
       res.send(television)
    }
    else {
        res.sendStatus(500)
    }
}

// POST AUDIO DEVICE

export const post = async (req:Request  , res:Response) => {
   
    const {name, description, manufacturer, price, screen_size} = req.body;

    const response = await service.postTv(name, description, manufacturer, price, screen_size);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }
}

// UPDATE AUDIO DEVICE (PUT)

export const update = async (req:Request  , res:Response) => {

    const {name, description, manufacturer, price, screen_size} = req.body;
    const id = req.params.id

    const response = await service.updateTv(name, description, manufacturer, price, screen_size, id);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }

}
    