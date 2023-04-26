import * as service from "../services/computerService";
import { Request, Response} from "express";

// GET ALL COMPUTERS

export const getAll = async (req:Request  , res:Response) => {

const computers = await service.getAllComputers();

 if (computers) {
    res.send(computers)
 }
 else {
    res.sendStatus(500)
 }
}

// GET COMPUTER BY ID

export const getById = async (req:Request  , res:Response) => {

    const id = req.params.id

    const computer = await service.getComputerById(id);

    if (computer) {
       res.send(computer)
    }
    else {
        res.sendStatus(500)
    }
}

// POST COMPUTER

export const post = async (req:Request  , res:Response) => {
   
    const {name, description, manufacturer, price, processor} = req.body;

    const response = await service.postComputer(name, description, manufacturer, price, processor);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }
}

// UPDATE COMPUTER (PUT)

export const update = async (req:Request  , res:Response) => {

    const {name, description, manufacturer, price, processor} = req.body;
    const id = req.params.id

    const response = await service.updateComputer(name, description, manufacturer, price, processor, id);

    if (response) {
        res.send(response)
     }
     else {
         res.sendStatus(500)
     }

}
    