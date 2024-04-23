import express from "express";
import {
  getCourses,
  getCourseById,
  updateTitle,
  updateSubTitle,
  updateFees,
  updateDescription,
  updateExpectations,
  updatePrerequisites,
} from "../controllers/CourseController.js";

const router = express.Router();

// route to list all the courses
router.get("/courses", getCourses);

//route to get details for a single course
router.get("/courses/:id", getCourseById);

//route to update a course details - inline edit
router.patch("/courses/edit/title/:id", updateTitle);
router.patch("/courses/edit/subtitle/:id", updateSubTitle);
router.patch("/courses/edit/fees/:id", updateFees);
router.patch("/courses/edit/description/:id", updateDescription);
router.patch("/courses/edit/expectations/:id", updateExpectations);
router.patch("/courses/edit/prerequisites/:id", updatePrerequisites);

export default router;
