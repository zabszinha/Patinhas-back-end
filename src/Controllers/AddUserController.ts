import { Request, Response } from "express";
import { AddUserService } from "../Services/AddUserService";


export class AddUserController{
    async handle(request: Request, response: Response){
        const {nome, email, senha} = request.body;

        const service = new AddUserService();

        const result = await service.execute({nome, email, senha});

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}