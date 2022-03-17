import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { connectToDatabase } from "../../../lib/mongodb";

export default NextAuth({
  pages: {
    signIn: "/users/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const resp = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/users/login/",
          {
            method: "post",
            body: JSON.stringify({
              username: credentials.email,
              password: credentials.password,
            }),
          }
        );
        const jresp = await resp.json();
        if (!(resp.ok)) {
          return null
        }
        return jresp;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
