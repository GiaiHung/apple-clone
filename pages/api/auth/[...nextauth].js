import NextAuth from 'next-auth'
import { SanityAdapter } from 'next-auth-sanity'
import GoogleProvider from 'next-auth/providers/google'
import { sanityClient } from '../../../utils/sanity'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin'
  },
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: SanityAdapter(sanityClient),
}
export default NextAuth(authOptions)
