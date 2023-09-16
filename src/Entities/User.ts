import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("cliente")
export class User {

    @PrimaryColumn()
    id_cliente: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @CreateDateColumn()
    datanascimento: Date;

    @Column()
    email: string;

    @Column()
    sexo: string;

    @Column()
    senha: string;
    

    

}