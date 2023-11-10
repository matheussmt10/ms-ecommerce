import { Request, Response, Router } from "express";
import { CustomerController } from "../controller/customer-controller";
import Container from "typedi";

const route = Router();
const controller: CustomerController = Container.get(CustomerController);
route.post("/", async (req: Request, res: Response) => {
  return res.send(await controller.create(req.body));
});

export { route };
