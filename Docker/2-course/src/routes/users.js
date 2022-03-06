import { controller } from "../controllers/users.js";
import router from "express";

router
  .Router()
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

export default router;
