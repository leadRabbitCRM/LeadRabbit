// pages/index.js
"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {session ? (
        <>
          <h1>Welcome, {session.user.name}</h1>
          <img
            src={session.user.image}
            alt="Profile"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <p>{session.user.email}</p>
          <br />
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>Facebook Login with Next.js</h1>
          <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
        </>
      )}
    </div>
  );
}
