import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default async function auth(req, res) {
  // Read the existing appToken from cookie
  const appToken = req.cookies.appToken;

  // Optional: reset the cookie after login so middleware sees it
  if (appToken) {
    res.setHeader(
      "Set-Cookie",
      `appToken=${appToken}; Path=/; HttpOnly; SameSite=Lax; Secure`
    );
  }

  return NextAuth(req, res, {
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        authorization: {
          params: {
            scope:
              "public_profile,email,pages_show_list,pages_read_engagement,leads_retrieval",
          },
        },
      }),
    ],
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken;
        return session;
      },
    },
  });
}
