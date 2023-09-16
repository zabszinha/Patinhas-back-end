import { User } from "../Entities/User"
import { AppDataSource } from "../../data-source";

type UserRequest = {
    
    email: string;
    senha: string;

}

export class LoginUserService {
    async execute({email, senha}:UserRequest): Promise< User | Error> {
        const repo = AppDataSource.getRepository(User);

        const user = await repo.findOneBy({
            email: email,
            senha: senha
        });

        if(user == null){
            return new Error("Email e/ou senha incorretos.");
        }

        

        return user;
        
    }
}