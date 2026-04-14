import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askAI = async (context, question) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
    return error.message;
  }
};