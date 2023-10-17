import { Request, Response } from "express";
import { AddBixinhoService } from "../Services/AddBixinhoService";


export class AddBixinhoController{
    async handle(request: Request, response: Response){
        const {nome, idade, especie, raca, porte, foto, descricao, id_usu} = request.body;

        const service = new AddBixinhoService();

        const result = await service.execute({nome, idade, especie, raca, porte, foto, descricao, id_usu});

        if (result instanceof Error){
            return response.status(200).json(result.message);
        }

        return response.json(result);
    }
}