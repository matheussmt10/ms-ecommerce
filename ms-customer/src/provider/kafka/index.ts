import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["classic-oyster-10080-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: "Y2xhc3NpYy1veXN0ZXItMTAwODAkGFcTlx4sm93hbAszYYvtqUO1w4MIR9ChHn8",
    password: "NmI0NTgzNDktZDMxZi00ZDdjLWJkODgtZDViYmQ0ODgzMDU4",
  },
  ssl: true,
});

export { kafka };
