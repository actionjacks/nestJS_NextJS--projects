import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<p>dupa_ww</p>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
