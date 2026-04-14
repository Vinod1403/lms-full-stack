import OpenAI from "openai";

export const askAI = async (context, question) => {
  try {

    console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an AI tutor. Explain clearly."
        },
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion:\n${question}`
        }
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.log("OPENAI ERROR:", error);
    return error.message;
  }
};