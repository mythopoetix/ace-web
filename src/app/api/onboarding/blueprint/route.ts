import { NextRequest, NextResponse } from "next/server";
import { createBlueprintDoc } from "@/lib/drive";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const required = [
      "fullName", "email", "timezone",
      "throughline", "values", "edges",
      "season", "regulation", "burnout", "joy",
      "projects", "people", "tools", "rhythm", "priorities",
    ];

    const missing = required.filter(
      (f) => !data[f] || typeof data[f] !== "string" || !data[f].trim()
    );

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // 1. Save to database
    // TODO: Get user from session, upsert BlueprintSubmission in DB
    // TODO: Mark onboarding blueprintDone = true
    console.log("[Blueprint] Submission received:", data.fullName);

    // 2. Create formatted Google Doc in client's Drive folder
    // The doc is structured in 11 sections for /build-vault compatibility
    const clientName = data.fullName;
    const folderId = data.driveFolderId || "pending"; // Set during folder creation

    const docContent = await createBlueprintDoc(clientName, folderId, data);
    console.log("[Blueprint] Google Doc content generated:", docContent.slice(0, 100));

    // 3. Notify Nikhil
    // TODO: Send email via Gmail MCP or Telegram notification
    console.log("[Blueprint] Notification: Blueprint submitted by", clientName);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Blueprint Error]", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
