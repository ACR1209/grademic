import { GrademicUser } from '@/types/grademicUser';
import { pb } from '@/utils/pocketbase';
import NextAuth, { RequestInternal, User } from 'next-auth';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { use } from 'react';
import { z } from "zod";


const loginUserSchema = z.object({
    email: z.string(),
    password: z.string().min(5, "Password should be minimum 5 characters"),
  });

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credenciales',
      credentials: {
        email: { label: 'Correo electrónico', type: 'text', placeholder: "test" },
        password: {  label: 'Contraseña',  type: 'password', placeholder: "password" },
      },

      async authorize(credentials, req) {
        try {
            const { email, password } = loginUserSchema.parse(credentials);

            const user = await pb.collection('users').authWithPassword(
                email,
                password,
            );
            if (!user) {
                return null;
            }
            return { id: user.record.id, email: user.record.email, created: user.record.created, updated: user.record.updated, verified: user.record.verified, userToken: user.token };

        } catch (error) {
            return null;

        }
      },
    }),
    
  ],
  callbacks: {
    session({ session, token }) {
      if (session && session.user ) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.username = (user as GrademicUser).email;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Other NextAuth.js options
};

export default NextAuth(authOptions);
