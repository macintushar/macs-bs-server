import { NextResponse } from "next/server";

const data = { predictions: { col1: ["A", "B", "C"], col2: [25, 25, 28] } };

export async function GET() {
  return NextResponse.json({ data });
}
