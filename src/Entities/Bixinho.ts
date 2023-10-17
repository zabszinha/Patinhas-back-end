import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("animal")
export class Bixinho {

    @PrimaryColumn()
    id_animal: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    especie: string;

    @Column()
    raca: string;

    @Column()
    porte: string;

    @Column()
    foto: string;

    @Column()
    descricao: string;

    @Column()
    id_usu: number;
    
}