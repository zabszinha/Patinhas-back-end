import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "ONG",
    synchronize: false,
    logging: false,
    entities: ["./src/Entities/*.ts"],
    migrations: ["./src/Database/Migrations/*.ts"],
    subscribers: [],
})
