import { createConnection } from "typeorm";
import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transactions } from "./entities/Transaction";
import { createClient } from "./routes/create_client";
import { createBanker } from "./routes/create_banker";
import { deleteClient } from "./routes/delete_client";
import { createTransaction } from "./routes/create_transaction";
import { connectBankerToClient } from "./routes/connect_banker_to_client";
import { fetchClients } from "./routes/fetch_clients";

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
    app.use(express.json());
    app.use(createClient);
    app.use(createBanker);
    app.use(createTransaction);
    app.use(connectBankerToClient);
    app.use(deleteClient);
    app.use(fetchClients);

    app.listen(8080, () => {
      console.log("Now running on port 8080");
    });
  } catch (err) {
    console.log("Error----------");
    console.log(err);
  }
};

main(1);
