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
        const parsedCredentials = JSON.stringify(credentials);
        console.log(parsedCredentials);
        const { db } = await connectToDatabase();
        const users = db.collection("users");
        const user = await users.findOne({
          email: parsedCredentials.email,
          password: parsedCredentials.password,
        });
        return { username: "mehdi", email: "m.abdi.public@gmail.com" };
      },
    }),
  ],
});
