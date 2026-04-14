import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askAI = async (context, question) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an AI tutor. Explain clearly."
        },
        {
          role: "user",
          content: `
Context:
${context}

Question:
${question}
          `
        }
      ],
      temperature: 0.7,
    });

    return completion.choices[0].message.content;

  } catch (error) {
    console.log("AI ERROR:", error);
    return error.message;
  }
};