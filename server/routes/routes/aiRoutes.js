import express from "express";
import Course from "../models/Course.js";
import { askAI } from "../ai/gemini.js";

const router = express.Router();

// AI Tutor Route
router.post("/ask", async (req, res) => {
  try {
    const { courseId, question } = req.body;

    // Get course from DB
    const course = await Course.findById(courseId);

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found"
      });
    }

    // Use course description as context
    const context = course.courseDescription || "No content available";

    // Ask AI
    const answer = await askAI(context, question);

    res.json({
      success: true,
      answer
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
});

export default router;