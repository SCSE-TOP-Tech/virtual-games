import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "~/lib/prisma";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password...",
        },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const loginDetails =
          {
            email: credentials?.email,
            password: credentials?.password,
          } ?? null;

        if (loginDetails == null) {
          return null;
        }

        const res = await fetch("/api/login/user", {
          method: "POST",
          body: JSON.stringify(loginDetails),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
