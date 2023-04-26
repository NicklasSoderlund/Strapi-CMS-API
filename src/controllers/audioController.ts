import * as service from "../services/audioService";
import { Request, Response} from "express";

// GET ALL AUDIO DEVICES

export const getAll = async (req:Request  , res:Response) => {

const audioDevices = await service.getAllAudioDevices();

 if (audioDevices) {
    res.send(audioDevices)
 }
 else {
    res.sendStatus(500)
 }
}

// GET AUDIO DEVICE BY ID

export const getById = async (req:Request  , res:Response) => {

    const id = req.params.id

    const audioDevice = await service.getAudioDeviceById(id);

    if (audioDevice) {
       res.send(audioDevice)
    }
    else {
        res.sendStatus(500)
    }
}

// POST AUDIO DEVICE

export const post = async (req:Request  , res:Response) => {
   
    const {name, description, manufacturer, price, effect} = req.body;

    const response = await service.postAudioDevice(name, description, manufacturer, price, effect);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }
}

// UPDATE AUDIO DEVICE (PUT)

export const update = async (req:Request  , res:Response) => {

    const {name, description, manufacturer, price, effect} = req.body;
    const id = req.params.id

    const response = await service.updateAudioDevice(name, description, manufacturer, price, effect, id);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }

}
    