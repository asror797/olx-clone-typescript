import express , { Request, Response } from "express";
import { dataSource } from "./config/ormconfig";
import { Users } from "./entities/users.entity";
const app: express.Application = express()

const PORT:number = 5050;



app.get('/',async(req:Request,res:Response) => {
   console.log(req.path)

   res.json( await dataSource.getRepository(Users).find())
})

app.listen(PORT,() => {
   console.log(`Serveris runing at ${PORT}`)
})