import { Request, Response } from "express";
import { AddUserService } from "../Services/AddUserService";


export class AddUserController{
    async handle(request: Request, response: Response){
        const {nome, email, senha, tp_usu} = request.body;

        const service = new AddUserService();

        const result = await service.execute({nome, email, senha, tp_usu});

        if (result instanceof Error){
            return response.status(200).json(result.message);
        }

        return response.json(result);
    }
}