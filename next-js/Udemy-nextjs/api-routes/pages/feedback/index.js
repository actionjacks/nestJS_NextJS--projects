import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback/feedback";

function Feedback({ feedbackItems }) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    console.log("ddd");
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
        console.log(feedbackData);
      });
  }

  return (
    <ul>
      {feedbackData && <p>{feedbackData.email}</p>}
      {feedbackItems.map((item) => (
        <>
          <li key={item.id}>{item.email}</li>
          <button onClick={loadFeedbackHandler.bind(null, item.id)}>
            Show details
          </button>
        </>
      ))}
    </ul>
  );
}

export default Feedback;

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
