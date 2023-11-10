import { Service } from "typedi";
import { OrderDto, OrderLogic } from "../logic";

@Service()
export class OrderController {
  private logic: OrderLogic;
  constructor(logic: OrderLogic) {
    this.logic = logic;
  }
  public async create(dto: OrderDto): Promise<any> {
    return this.logic.create(dto);
  }
}
