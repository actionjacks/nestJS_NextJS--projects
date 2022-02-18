import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import logger from "./util/logger.js";
import Response from "./domain/response.js";
import HttpStatus from "./controller/patient.controller.js";
import patientRoutes from "./route/patient.toute.js";
//dev-
//console.log(process.env);

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
// orgins array of strings to allow to use app
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send(
    new Response(HttpStatus.OK.code, HttpStatus.OK.status, "Patient API")
  );
});

app.all("*", (req, res) => {
  res
    .status(HttpStatus.NOT_FOUND.code)
    .send(
      new Response(
        HttpStatus.NOT_FOUND.code,
        HttpStatus.NOT_FOUND.status,
        "Route does not exist on the server"
      )
    );
});

app.listen(PORT, () => {
  logger.info(`Server running on: ${ip.address()}:/port#/ ${PORT}`);
});
