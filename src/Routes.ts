import { Router } from "express";
import { AddUserController } from "./Controllers/AddUserController";
import { LoginUserController} from "./Controllers/LoginUserController"
import { ListAllBixinhosController } from "./Controllers/ListAllBixinhosController"
import { AddBixinhoController } from "./Controllers/AddBixinhoController"

const routes = Router();

routes.post("/AddUser", new AddUserController().handle);
routes.post("/LoginUser", new LoginUserController().handle);
routes.get("/ListAllBixinhos", new ListAllBixinhosController().handle);
routes.post("/AddBixinho", new AddBixinhoController().handle);


export { routes };
