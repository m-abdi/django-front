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
        const { db } = await connectToDatabase();
        const users = db.collection("users");
        const query = {
          email: credentials.email,
          password: credentials.password,
        };
        const user = await users.findOne(query);
        if (user.status === "inactive") {
          return Promise.reject(
            new Error("Please verify your email first")
          );
        } else {
          return user;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
});
