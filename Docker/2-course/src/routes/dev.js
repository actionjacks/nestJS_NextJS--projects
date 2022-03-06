import router from "express";
import { version } from "../controllers/dev.js";

export default router.Router().get("/version", version);
