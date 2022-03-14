import pg from "pg";
import express from "express";
const app = express();
const port = 8000;

const client = new pg.Client({
  password: "admin",
  user: "admin",
  host: "postgres",
});

//serve folder as fornted using express
app.use(express.static("public"));

app.get("/employess", async (req, res) => {
  const result = await client
    .query("SELECT * FROM employees")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("qury faild");
    });
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(result));
});

(async () => {
  await client.connect();
  app.listen(port, () => {
    console.log("App listing at " + port);
  });
})();
