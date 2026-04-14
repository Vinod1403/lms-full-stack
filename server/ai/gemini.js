import fetch from "node-fetch";

export const askAI = async (context, question) => {
  try {

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `
You are an AI tutor. Explain clearly.

Context:
${context}

Question:
${question}
                  `
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500
          }
        }),
      }
    );

    const data = await response.json();

    console.log("FULL AI RESPONSE:", JSON.stringify(data, null, 2));

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

  } catch (error) {
    console.log("AI ERROR:", error);
    return error.message;
  }
};