import { ProducerMessage } from "../provider/kafka/producer";
import { CustomerRepository } from "../repository";
import { Service } from "typedi";
export type CustomerDto = {
  email: string;
  username: string;
  password: string;
};

@Service()
export class CustomerLogic {
  private repository: CustomerRepository;

  private producerMessaging: ProducerMessage;
  constructor(
    repository: CustomerRepository,
    producerMessaging: ProducerMessage
  ) {
    this.repository = repository;
    this.producerMessaging = producerMessaging;
  }
  public async create(customer: CustomerDto): Promise<any> {
    try {
      const customerCreated = await this.repository.create(customer);
      const { email, username } = customerCreated;
      await this.producerMessaging.execute(process.env.TOPIC_KAFKA!, {
        username,
        email,
      });
      return customerCreated;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
