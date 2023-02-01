import express, {Request, Response, NextFunction} from "express";
import 'express-async-errors'
import { router } from "./routes";
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors()) // qualquer ip/url fazer requisição na nossa Api

app.use(router);

// criando nossa middleware para tratar nosso Error
app.use((err:Error, req:Request, res:Response, next:NextFunction) =>{
    if(err instanceof Error){
        // se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    // se nao for do tipo instance error
    return res.status(500).json({
        status: 'error',
        message: "Internal server error."
    })

})






//----- inicializando o projeto -----
app.listen(3333, () => console.log("servidor online"))