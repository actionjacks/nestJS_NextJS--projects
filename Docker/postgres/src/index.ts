import { createConnection } from "typeorm";
import { Client } from "./entities/Client";

const main = async (params: any) => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jack2",
      password: "123",
      database: "mydb",
      entities: [Client],
      synchronize: true,
    });
    console.log("connection success");
  } catch (err) {
    console.log("Error----------");
    console.log(err);
  }
};

main(1);
