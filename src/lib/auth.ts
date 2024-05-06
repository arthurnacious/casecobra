import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
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
    session({ session, token, user }) {
      // console.log(user.role);
      return {
        ...session,
        user: {
          ...session.user,
          role: "admin",
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
});
