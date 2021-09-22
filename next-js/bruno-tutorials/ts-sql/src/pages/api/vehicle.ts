import { NextApiRequest, NextApiResponse } from "next";

export default function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ hello: "jac", method: req.method });
}
