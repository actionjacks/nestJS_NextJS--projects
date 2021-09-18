import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@jacek.nqpdz.mongodb.net/nextjAuth?retryWrites=true&w=majority"
  );
  return client;
}
