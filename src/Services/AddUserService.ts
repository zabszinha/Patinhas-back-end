import { User } from "../Entities/User"
import { AppDataSource } from "../../data-source";

type UserRequest = {
    nome: string;
    email: string;
    senha: string;
    tp_usu: boolean;
}

export class AddUserService {
    async execute({nome, email, senha, tp_usu}:UserRequest): Promise< string | Error > {
        const repo = AppDataSource.getRepository(User);


        if(await repo.findOneBy({ email: email })){
            return new Error("Email já cadastrado!");
            
        }

        const user = repo.create({
            nome,
            email,
            senha,
            tp_usu
        })


        await repo.save(user);

        return "Usuario "+user.nome+" cadastrado com sucesso";
    }
}