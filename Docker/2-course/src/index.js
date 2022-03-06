import express from "express";
import routeDev from "./routes/dev.js";
import db from "./util/databse.js";
import User from "./models/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

app.use("/dev", routeDev);
app.use("/users", User);

(async () => {
  try {
    await db.sync({ force: false });

    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (err) {
    console.log(err);
  }
})();
