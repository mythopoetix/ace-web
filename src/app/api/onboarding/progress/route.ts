import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { step } = await request.json();

    const validSteps = ["watchedIntro", "blueprintDone", "prepDone", "sessionBooked"];
    if (!validSteps.includes(step)) {
      return NextResponse.json({ error: "Invalid step" }, { status: 400 });
    }

    // TODO: Get user from session, update OnboardingProgress in DB
    console.log("[Onboarding] Step completed:", step);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Onboarding Progress Error]", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
