import { createConnection } from "typeorm";
import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transactions } from "./entities/Transaction";

const app = express();

const main = async (params: any) => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jack2",
      password: "123",
      database: "mydb",
      entities: [Client, Banker, Transactions],
      synchronize: true,
    });
    console.log("connection success");
  } catch (err) {
    console.log("Error----------");
    console.log(err);
  }
};

main(1);
