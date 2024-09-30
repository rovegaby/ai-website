import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com/v1",
});

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [{ role: "user", content: message }],
    });

    const aiResponse = response.choices[0].message.content;
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error calling DeepSeek API:", error);
    return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 });
  }
}