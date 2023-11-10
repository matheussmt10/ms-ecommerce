import { OrderRepository } from "../repository";
import { Service } from "typedi";
export type OrderDto = {
  external_id: string;
  type_order: string;
};

@Service()
export class OrderLogic {
  private repository: OrderRepository;

  constructor(repository: OrderRepository) {
    this.repository = repository;
  }
  public async create(customer: OrderDto): Promise<any> {
    try {
      const customerCreated = await this.repository.create(customer);
      const { email, username } = customerCreated;

      return customerCreated;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
