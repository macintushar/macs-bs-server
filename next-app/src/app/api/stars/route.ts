import { NextResponse } from "next/server";

type Body = {
  action: "created" | "deleted";
  starred_at: Date;
  repository: {
    name: "draw";
    full_name: "macintushar/draw";
    url: "https://api.github.com/repos/macintushar/draw";
    stargazers_count: 34;
    watchers_count: 34;
  };
  sender: {
    login: "macintushar";
  };
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  console.log(
    `${body.sender.login} starred the *${body.repository.full_name}* repository.`,
  );

  return NextResponse.json({ body });
}
