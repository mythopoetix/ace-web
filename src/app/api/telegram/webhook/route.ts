import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Telegram Bot API webhook payload
    const message = body.message;

    if (message?.chat?.id === -1001842003297) {
      console.log("[Telegram]", message.from?.first_name, message.text?.slice(0, 50));

      // TODO: Cache message in TelegramMessage table
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Telegram Webhook Error]", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
