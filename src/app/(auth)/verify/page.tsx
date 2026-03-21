import { Card } from "@/components/ui/Card";
import { CoherenceOrb } from "@/components/brand/CoherenceOrb";
import { Button } from "@/components/ui/Button";

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <CoherenceOrb size="dashboard" className="mx-auto" />
        <h1 className="font-heading text-2xl font-semibold mt-6 mb-3">
          Not yet a member
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">
          Your account was verified, but you don&apos;t have an active ACE
          membership yet. Join the next cohort to get access.
        </p>

        <Card gradient className="mb-6">
          <p className="font-heading text-lg font-semibold mb-1">Batch 2</p>
          <p className="text-2xl font-heading font-semibold text-[var(--authority)]">
            $2,997
          </p>
          <p className="text-xs text-[var(--text-dim)] mt-1">
            Founding rate. Limited seats.
          </p>
        </Card>

        <div className="flex flex-col gap-3">
          <Button variant="primary" href="/paradigm-shift">
            Watch the Paradigm Shift
          </Button>
          <Button variant="ghost" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
