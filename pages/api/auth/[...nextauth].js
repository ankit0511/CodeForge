import clientPromise from '@/lib/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('SignIn Callback - User:', user);
      console.log('SignIn Callback - Account:', account);
      console.log('SignIn Callback - Profile:', profile);
      return true; // Return true to allow sign-in
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect Callback - URL:', url);
      console.log('Redirect Callback - Base URL:', baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt(token, user) {
      if (user) {
        console.log('JWT Callback - User:', user);
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      if (token && token.id) {
        console.log('Session Callback - Token:', token);
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});