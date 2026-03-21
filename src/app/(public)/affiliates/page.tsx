import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Affiliate Program — ACE",
  description:
    "Earn 25% commission on every referral. Built on ThriveCart. 90-day cookie window.",
};

export default function AffiliatesPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-widget-reveal">
          <Badge variant="capacity">Affiliate Program</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Earn while you refer.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Know someone who needs an operating system, not another app? Refer
            them to ACE and earn 25% commission on every sale.
          </p>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { value: "25%", label: "Commission per sale", color: "var(--capacity)" },
            { value: "90 days", label: "Cookie window", color: "var(--authority)" },
            { value: "$749", label: "Per Batch 2 referral", color: "var(--expansion)" },
          ].map((stat) => (
            <Card key={stat.label} gradient className="text-center">
              <p
                className="font-heading text-3xl font-semibold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)]">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl font-semibold text-center mb-8">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Fill out the affiliate application. We review within 48 hours.",
                color: "var(--authority)",
              },
              {
                step: "02",
                title: "Share",
                desc: "Get your unique ThriveCart affiliate link. Share it wherever your audience lives.",
                color: "var(--capacity)",
              },
              {
                step: "03",
                title: "Earn",
                desc: "When someone purchases through your link, you earn 25% commission. Paid monthly via PayPal or Stripe.",
                color: "var(--expansion)",
              },
            ].map((item) => (
              <Card key={item.step}>
                <span
                  className="font-mono text-[10px] uppercase tracking-[2px] block mb-2"
                  style={{ color: item.color }}
                >
                  Step {item.step}
                </span>
                <h3 className="font-heading text-base font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl font-semibold text-center mb-8">
            Best for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Coaches & Consultants",
                desc: "You already help people build systems. ACE is the infrastructure layer your clients are missing.",
              },
              {
                title: "Community Leaders",
                desc: "Your audience values sovereignty and personal growth. ACE is the tool that matches the ethos.",
              },
              {
                title: "ACE Members",
                desc: "You use the system. You know what it does. Your referral carries weight because you live it.",
              },
              {
                title: "Content Creators",
                desc: "You talk about AI, productivity, or personal development. ACE is the product that actually delivers.",
              },
            ].map((item) => (
              <Card key={item.title} hover>
                <h3 className="font-heading text-sm font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Commission structure */}
        <Card gradient className="mb-16">
          <h2 className="font-heading text-lg font-semibold mb-4 text-center">
            Commission Structure
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] pb-3">
                    Product
                  </th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] pb-3">
                    Price
                  </th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)] pb-3">
                    Your Commission
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="py-3">ACE Batch 2 (Current)</td>
                  <td className="py-3">$2,997</td>
                  <td className="py-3 text-[var(--capacity)] font-medium">$749</td>
                </tr>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="py-3">ACE Batch 3</td>
                  <td className="py-3">$3,997</td>
                  <td className="py-3 text-[var(--capacity)] font-medium">$999</td>
                </tr>
                <tr>
                  <td className="py-3">ACE Live (future subscription)</td>
                  <td className="py-3">$67–$397/mo</td>
                  <td className="py-3 text-[var(--capacity)] font-medium">25% recurring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold mb-4">
            Ready to partner?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Apply below. We&apos;ll review your application and get you set up
            with your unique tracking link within 48 hours.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="mailto:nikhil@asraya.io?subject=ACE%20Affiliate%20Application"
          >
            Apply Now
          </Button>
          <p className="text-[10px] text-[var(--text-dim)] mt-4">
            Powered by ThriveCart affiliate tracking. 90-day cookie. Monthly payouts.
          </p>
        </div>
      </div>
    </div>
  );
}
