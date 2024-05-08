import { db } from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { sql } from "drizzle-orm";
import NextAuth, { DefaultSession } from "next-auth";
import { Provider } from "next-auth/providers";
import github, { GitHubProfile } from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      role: "admin" | "user";
    } & DefaultSession["user"];
  }
}

const providers: Provider[] = [github];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: providers,
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, token, user }) {
      const dbUser = await db.query.users.findFirst({
        where: sql`${users.id} = ${user.id}`,
      });
      return {
        ...session,
        user: {
          ...session.user,
          role: dbUser?.role ?? "user",
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
});
