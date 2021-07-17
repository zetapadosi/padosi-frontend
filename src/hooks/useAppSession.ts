import { useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { signIn } from "../api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useAppSelector } from "./useRedux";

export default function useAppSession() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [registrationStarted, setRegistrationStarted] = useState(false);
  const [session, sLoading] = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(false);
      return;
    } else if (!sLoading) {
      const userFrom = localStorage.getItem("userFrom") as "google" | "facebook";
      let email = localStorage.getItem("padosiEmail");
      if (!email) {
        if (session) {
          email = session.user.email;
          localStorage.setItem("padosiEmail", email);
        } else {
          setLoading(false);
          if (router.pathname !== "/") router.replace("/");
          return;
        }
      }
      const main = async () => {
        const res = await signIn({ email, userFrom });

        if (res.status === "USER_NOT_FOUND") {
          setRegistrationStarted(true);
          setLoading(false);
        } else if (res.status === "SIGNED_SUCCESS") {
          const user = res.value;
          const { name, bio, picture, area, userId, _id } = user;
          const date = new Date(user.createdAt);
          const joined =
            date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[3];
          const followers = user.followers.length;
          const following = user.following.length;
          const lng = user.location.coordinates[0];
          const lat = user.location.coordinates[1];
          dispatch(
            setUser({
              isLoggedIn: true,
              userId,
              _id,
              name,
              bio,
              picture,
              joined,
              followers,
              following,
              location: { lat, lng },
              area,
            })
          );
          // setAuthenticated(true);
          setLoading(false);
        }
      };
      main();
    }
  }, [sLoading]);

  return { loading, registrationStarted, isLoggedIn };
}
