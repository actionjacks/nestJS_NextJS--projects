import { MongoClient } from "mongodb";

export async function connectDatabse() {
  //connect to mongoDB
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@jacek.nqpdz.mongodb.net/nextjs?retryWrites=true&w=majority"
  );
  return client;
}
export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}
export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter) // this changed - we use the "filter" parameter!
    .sort(sort)
    .toArray();

  return documents;
}
