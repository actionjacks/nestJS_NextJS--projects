import {
  connectDatabse,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId; //need file name.js [eventId].js

  //connect to mongoDB
  let client;

  try {
    client = await connectDatabse();
  } catch (error) {
    res.status(500).json({ message: "Connectiong to the databse failed!" });
    return;
  }

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
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Connectiong to the databse failed!" });
    }
  }

  if (req.method === "GET") {
    // const db = client.db();

    // const documents = await db
    //   .collection("comments")
    //   .find({ eventId: eventId })
    //   .sort({ _id: -1 })
    //   .toArray();
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: "Getting comments failed" });
    }
  }

  client.close();
}
export default handler;
