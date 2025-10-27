import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { logs } = await req.json();

  const prompt = `
You are a productivity coach. Summarize this user's workday:
${JSON.stringify(logs)}
Provide a short insight, a tip for tomorrow, and an encouragement.
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return NextResponse.json({ summary: completion.choices[0].message });
}
