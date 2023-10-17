import { Request, Response } from "express";
import { ListAllBixinhosService } from "../Services/ListAllBixinhosService";


export class ListAllBixinhosController {
    async handle( Request: Request, response: Response){
       

        const service = new ListAllBixinhosService();

        const result = await service.execute();

        if (result instanceof Error){
            return response.status(200).json(result.message);
        }

        console.log(result)

        return response.json(result);
    }
}