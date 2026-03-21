import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId, adminKey } = await request.json();

    // Simple admin key check — replace with proper auth
    if (adminKey !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!userId) {
      return NextResponse.json({ error: "userId required" }, { status: 400 });
    }

    // TODO: Update OnboardingProgress.buildComplete = true for userId
    // TODO: Set completedAt = now()
    console.log("[Admin] Build session marked complete for:", userId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Admin Complete Build Error]", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
