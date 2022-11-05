import NextAuth, { Session, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import client from 'lib/prismadb';

export const authOptions = {
  adapter: PrismaAdapter(client),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      session.user.id = user.id;
      return session;
    },
  },
  debug: true,
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
