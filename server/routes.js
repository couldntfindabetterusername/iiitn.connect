import express from "express";

import {
  getStudentData,
  postStudentData,
  updateStudentData,
} from "./controllers.js";

const router = express.Router();

router.get("/", getStudentData);
router.post("/", postStudentData);
router.patch("/:id/", updateStudentData);

export default router;
