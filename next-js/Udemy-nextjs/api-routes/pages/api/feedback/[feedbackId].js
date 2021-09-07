import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  //you can put others POST DELET etc
  if (req.method === "DELETE") {
    //
  }
  const feedbackId = req.query.feedbackId;

  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedbacm = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedbacm });
}

export default handler;
