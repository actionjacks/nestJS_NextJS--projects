import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    //extract email and feedback from post req
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };
    //save to db

    //save to local json
    const filepath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filepath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filepath, JSON.stringify(data));

    res.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "yolol",
    });
  }
}

export default handler;
