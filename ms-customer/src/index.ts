import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { route } from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(route);
app.listen(8080, () => {
  console.info("Server initialized on port 8080");
});
