import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers, auth } = NextAuth({
  providers: [github],
  adapter: DrizzleAdapter(db),
});
