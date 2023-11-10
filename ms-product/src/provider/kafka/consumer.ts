import dotenv from "dotenv";
import { kafka } from ".";
dotenv.config();
export class ConsumerMessage {
  public async execute() {
    const consumer = kafka.consumer({ groupId: "kafka-test" });

    await consumer.connect();
    await consumer.subscribe({
      topic: "CUSTOMER",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value!.toString(),
        });
      },
    });
  }
}
