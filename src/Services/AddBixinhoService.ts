import { Bixinho } from "../Entities/Bixinho"
import { AppDataSource } from "../../data-source";

type BixinhoRequest = {
    nome: string;
    idade: number;
    especie: string;
    raca: string;
    porte: string;
    foto: string;
    descricao: string;
    id_usu: number
}

export class AddBixinhoService {
    async execute({nome, idade, especie, raca, porte, foto, descricao, id_usu}:BixinhoRequest): Promise< string | Error > {
        const repo = AppDataSource.getRepository(Bixinho);


        const bixinho = repo.create({
            nome,
            idade,
            especie,
            raca,
            porte,
            foto,
            descricao,
            id_usu
        })


        await repo.save(bixinho);

        return "Bixinho "+bixinho.nome+" cadastrado com sucesso";
    }
}