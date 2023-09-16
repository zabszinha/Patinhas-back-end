import { Request, Response } from "express";
import { LoginUserService } from "../Services/LoginUserService";


export class LoginUserController{
    async handle(request: Request, response: Response){
        const {email, senha} = request.body;

        const service = new LoginUserService();

        const result = await service.execute({email, senha});

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}