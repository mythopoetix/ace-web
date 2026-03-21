import { MembersSidebar } from "@/components/layout/MembersSidebar";
import { MembersHeader } from "@/components/layout/MembersHeader";

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <MembersSidebar />
      <div className="flex-1 flex flex-col">
        <MembersHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
