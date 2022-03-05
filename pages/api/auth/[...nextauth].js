import CredentialsProvider from "next-auth/providers/credentials";
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
        return user.status === 'inactive' ? null : user;
      },
    }),
  ],
});
