import { Router } from "express";
import { AddUserController } from "./Controllers/AddUserController";
import { LoginUserController} from "./Controllers/LoginUserController"


const routes = Router();

routes.post("/AddUser", new AddUserController().handle);
routes.post("/LoginUser", new LoginUserController().handle);

export { routes };
