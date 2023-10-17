import { User } from "../Entities/User"
import { AppDataSource } from "../../data-source";

type UserRequest = {
    
    email: string;
    senha: string;

}

type UserReturn = {
    id: number;
    tp_usu: boolean;
}

export class LoginUserService {
    async execute({email, senha}:UserRequest): Promise< UserReturn | Error> {
        const repo = AppDataSource.getRepository(User);

        const user = await repo.findOneBy({
            email: email,
            senha: senha
        });

        if(user == null){
            return new Error("Email e/ou senha incorretos.");
        }

        console.log(user.email)

        const retorno = {
            "id": user.id_usu,
            "tp_usu": user.tp_usu
        }

        return retorno;
        
    }
}