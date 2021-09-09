import { connectDatabse, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }
    let client;

    try {
      client = await connectDatabse();
    } catch (error) {
      res.status(500).json({ message: "Connectiong to the databse failed!" });
      return;
    }

    try {
      await insertDocument(client, "emails", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: `success ${userEmail}` });
  }
}
export default handler;
