import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("usuario")
export class User {

    @PrimaryColumn()
    id_usu: number;

    @Column()
    nome: string;

    @Column()
    cpfcnpj: string;

    @CreateDateColumn()
    datanascimento: Date;

    @Column()
    email: string;

    @Column()
    sexo: string;

    @Column()
    senha: string;

    @Column()
    tp_usu: boolean;
    
}