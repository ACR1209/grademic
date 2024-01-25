import { GrademicUser } from '@/types/grademicUser';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User extends GrademicUser {
    id: string;
    email: string;
    verified: boolean;
    userToken: string;
  }
}

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        email: string;
      } & Session["user"];
    }
  }