import { NextResponse } from "next/server";

type Feedback = {
    feedback: string;
}

export async function POST(request: Request) {
    const body = await request.json() as Feedback;
    console.log(body);

    return NextResponse.json({ feedback: `Received Feedback: ${body.feedback}` })
}