import { Service } from "typedi";
import { prismaClient } from "../database/prisma-client";
import { CustomerDto } from "../logic/customer-logic";

@Service()
export class CustomerRepository {
  public async create(customer: CustomerDto): Promise<any> {
    return prismaClient.customer.create({
      data: {
        ...customer,
      },
    });
  }

  public async findAll(): Promise<Array<CustomerDto>> {
    return prismaClient.customer.findMany();
  }

  public async findById(id: string): Promise<CustomerDto | null> {
    return prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });
  }
}
