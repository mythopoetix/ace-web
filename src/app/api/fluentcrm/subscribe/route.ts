import { NextRequest, NextResponse } from "next/server";
import { createContact } from "@/lib/fluentcrm";

export async function POST(request: NextRequest) {
  try {
    const { email, source = "landing" } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const tagMap: Record<string, string[]> = {
      landing: ["paradigm-shift-watched", "ace-waitlist"],
      "paradigm-shift": ["paradigm-shift-watched"],
      waitlist: ["ace-waitlist"],
    };

    const tags = tagMap[source] || ["ace-waitlist"];

    await createContact(email, tags);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FluentCRM subscribe error:", error);

    // If FluentCRM is not configured, still accept the email gracefully
    if (
      error instanceof Error &&
      error.message.includes("not configured")
    ) {
      console.warn(
        "FluentCRM not configured — email captured in logs only"
      );
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
