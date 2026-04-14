import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askAI = async (context, question) => {
  try {

    // 🔥 ADD THIS LINE HERE
    console.log("KEY CHECK:", process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    You are an AI tutor.
    Explain clearly.

    Context:
    ${context}

    Question:
    ${question}
    `;

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    console.log("AI ERROR:", error);
    return "AI error";
  }
};