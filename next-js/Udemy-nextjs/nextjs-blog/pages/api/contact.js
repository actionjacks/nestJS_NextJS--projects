import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input or missing some" });
      return;
    }

    //save in db
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    //mongodb+srv://admin:admin@jacek.nqpdz.mongodb.net/nextjsblog?retryWrites=true&w=majority
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${mongodb_clustername}.nqpdz.mongodb.net/${process.env.mongodb_databse}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to databse" });
      return;
    }
    //if success connect to db
    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "storing message failed" });
    }
    client.close();

    res.status(201).json({ message: "save data", message: newMessage });
  }
}
export default handler;
