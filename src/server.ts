import "reflect-metadata";
import express from "express";
import { routes } from "./Routes";
import { AppDataSource } from "../data-source";

const app = express();

app.use(express.json());

app.use(routes);

AppDataSource.initialize().then(async () => {
    console.log('Database ok');

    app.listen(3000,  () => console.log("Server is Running"));
})