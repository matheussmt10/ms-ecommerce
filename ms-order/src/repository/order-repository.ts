import { Service } from "typedi";
import { prismaClient } from "../database/prisma-client";
import { OrderDto } from "../logic/order-logic";

@Service()
export class OrderRepository {
  public async create(order: OrderDto): Promise<any> {
    return prismaClient.order.create({
      data: {
        ...order,
      },
    });
  }

  public async findAll(): Promise<Array<OrderDto>> {
    return prismaClient.order.findMany();
  }

  public async findById(id: string): Promise<OrderDto | null> {
    return prismaClient.order.findFirst({
      where: {
        id: id,
      },
    });
  }
}
