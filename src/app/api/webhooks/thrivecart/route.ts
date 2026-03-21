import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ThriveCart webhook payload
    const { event, customer, thrivecart_account } = body;

    console.log("[ThriveCart Webhook]", event, customer?.email);

    // TODO: Verify webhook signature
    // TODO: On purchase — update FluentCRM tag + create/update User record
    // TODO: On subscription cancel — downgrade user tier

    switch (event) {
      case "order.success":
        // Create/update user as ACTIVE
        // Add ace-member tag in FluentCRM
        break;

      case "order.refund":
        // Downgrade user
        break;

      case "subscription.cancelled":
        // Set memberStatus to CHURNED
        break;

      default:
        console.log("[ThriveCart] Unhandled event:", event);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[ThriveCart Webhook Error]", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
