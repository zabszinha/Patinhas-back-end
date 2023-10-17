import { Bixinho } from "../Entities/Bixinho"
import { AppDataSource } from "../../data-source";


export class ListAllBixinhosService {
    async execute() {
        const repo = AppDataSource.getRepository(Bixinho);

        const bixinhos = await repo.find();

        if(bixinhos == null){
            return new Error("Não há bixinhos encontrados");
        }

        console.log(bixinhos)

        return bixinhos;
        
    }
}