import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;
  console.log(body);

  return NextResponse.json({ body });
}
