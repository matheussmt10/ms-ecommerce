import { Service } from "typedi";
import { kafka } from ".";

@Service()
export class ProducerMessage {
  public async execute(topic: string, payload: any) {
    const producer = kafka.producer({
      allowAutoTopicCreation: true,
    });

    await producer.connect();
    await producer.send({
      topic,
      messages: [
        {
          value: JSON.stringify(payload),
        },
      ],
    });

    await producer.disconnect();
  }
}
