import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = request.headers.get("x-github-event");

    console.log("[GitHub Webhook]", event);

    if (event === "push") {
      const commits = body.commits ?? [];

      for (const commit of commits) {
        console.log("[Changelog]", commit.id?.slice(0, 7), commit.message);

        // TODO: Parse commit message, extract skill names from paths
        // TODO: Create ChangelogEntry in database
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[GitHub Webhook Error]", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
