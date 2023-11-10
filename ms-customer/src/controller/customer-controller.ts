import { Service } from "typedi";
import { CustomerDto, CustomerLogic } from "../logic";

@Service()
export class CustomerController {
  private logic: CustomerLogic;
  constructor(logic: CustomerLogic) {
    this.logic = logic;
  }
  public async create(dto: CustomerDto): Promise<any> {
    return this.logic.create(dto);
  }
}
