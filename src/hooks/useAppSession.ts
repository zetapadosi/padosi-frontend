import { useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import Cookies from "js-cookie";
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
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    console.log("test1");

    // if (isLoggedIn) {
    //   setLoading(false);
    //   setAuthenticated(true);
    //   return;
    // } else
    if (!sLoading) {
      console.log("test2");
      if (session) {
        console.log("test3");
        const user = {
          email: session.user.email,
          userFrom: localStorage.getItem("userFrom"),
        };

        const main = async () => {
          console.log("test4");
          // console.log(user);
          const res = await signIn(user);
          // console.log(res);
          if (res.status === "USER_NOT_FOUND") {
            setLoading(false);
            setRegistrationStarted(true);
          } else if (res.status === "SIGNED_SUCCESS") {
            Cookies.set("t", res.value.token, { expires: 100 });
            const user = res.value.user;
            const { userId, name, bio, picture } = user;
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
                name,
                bio,
                picture,
                joined,
                followers,
                following,
                location: { lat, lng },
              })
            );
            setLoading(false);
            setAuthenticated(true);
          } else {
            console.log(res.status);
          }
        };
        main();
      } else {
        setLoading(false);
        if (router.pathname !== "/") router.replace("/");
      }
    }
  }, [sLoading]);
  console.log(loading, authenticated);
  return { loading, authenticated, registrationStarted, isLoggedIn };
}
