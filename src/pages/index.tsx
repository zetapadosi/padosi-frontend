import { useState } from "react";
import Button from "../components/Button";
import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";
import { signOut, useSession } from "next-auth/client";

export default function Index() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, loading] = useSession();
  console.log(session);
  if (loading) return null;
  if (session)
    return (
      <div className="">
        <h1>Hello {session.user.name}</h1>
        <Button onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}>Sign out</Button>
      </div>
    );
  return <LoginPage />;
}
