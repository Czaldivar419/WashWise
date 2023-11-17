import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../../lib/mongodb'

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: 'WashwiseMain',
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    session(session, token) {
      if (token) {
        session.user = token.user;
        session.maxAge= 30 * 60
      }
      return session;
    },
  },
});