import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../helpers/db";
import { verifyPassword, hashPassword } from "../../../helpers/auth";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  //api guard
  if (!session) {
    res.status(401).json({ message: "not authenticated" });
    return;
  }
  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "user not found" });
    client.close();
    return;
  }
  const currentPassword = user.password;
  const passwordAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordAreEqual) {
    res.status(403).json({ message: "password dont match" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    {
      email: userEmail,
    },
    {
      $set: { password: hashedPassword },
    }
  );
  client.close();
  res.status(200).json({ message: "password updated" });
}

export default handler;
