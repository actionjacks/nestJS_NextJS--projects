import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { user } = req.body;

    const saveUser = await prisma.user.create({
      data: user,
    });
    res.status(200).json(saveUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
