import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }

    //connect to mongoDB
    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@jacek.nqpdz.mongodb.net/nextjs?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: `success ${userEmail}` });
  }
}
export default handler;
