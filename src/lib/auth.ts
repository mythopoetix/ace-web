import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { memberStatus: true, tier: true },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const u = session.user as any;
        u.memberStatus = dbUser?.memberStatus ?? "PENDING";
        u.tier = dbUser?.tier ?? "FREE";
      }
      return session;
    },
  },
});
