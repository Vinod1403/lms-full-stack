import express from "express";
import Course from "../models/Course.js";
import { askAI } from "../ai/gemini.js";

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { courseId, question } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found"
      });
    }

    const context = course.courseDescription || "No content available";

    const answer = await askAI(context, question);

    res.json({
      success: true,
      answer
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }
});

export default router;