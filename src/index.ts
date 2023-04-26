import express from "express";
import cors from 'cors'
import { authorizeUser } from "./middleware/authorization";
import mobileRouter from "./routes/mobileRoutes";
import computerRouter from "./routes/computerRoutes";
import audioRouter from "./routes/audioRoutes";
import televisionRouter from "./routes/televisionRoutes";
import accountRouter from "./routes/accountRoutes";


const app = express();

app.use(cors({
    origin: '*'
}));

app.use(authorizeUser)

app.use(express.json())

app.use(mobileRouter, computerRouter, audioRouter, televisionRouter, accountRouter)


app.listen(8008, () => {
    console.log('Listening on localhost, port: 8008')
})




