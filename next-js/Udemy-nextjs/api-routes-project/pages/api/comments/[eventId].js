import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId; //need file name.js [eventId].js

  //connect to mongoDB
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@jacek.nqpdz.mongodb.net/nextjs?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "ivalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  client.close();
}
export default handler;
