import prisma from "../../lib/prisma";

export default async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      res.json({ error: "you shoul have an id!" });
      return;
    }
    const user = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "something went wrong" });
  }
};
