import { Request, Response, Router } from "express";
import { OrderController } from "../controller/order-controller";
import Container from "typedi";

const route = Router();
const controller: OrderController = Container.get(OrderController);
route.post("/", async (req: Request, res: Response) => {
  return res.send(await controller.create(req.body));
});

export { route };
