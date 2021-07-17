import Link from "next/link";
import useMaps from "../../hooks/useMaps";
import Button from "../../components/Button";
import TextLogo from "../../components/TextLogo";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { register } from "../../api/user";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import usePlaces from "../../hooks/usePlaces";
import { useState } from "react";

function ConfirmLocationPage({ location, setStep }) {
  const { mapref, latLngRef } = useMaps(location);
  const { getGeocoder } = usePlaces();

  const router = useRouter();
  const [session] = useSession();
  const dispatch = useDispatch();
  return (
    <>
      <nav className="grid grid-cols-3 py-2 px-4 items-center bg-white shadow-sm">
        <Link href="/select-location">
          <a className="justify-self-start">
            <Button primary pill styles="px-3 py-1 md:px-5 md:py-1" onClick={() => setStep(0)}>
              Back
            </Button>
          </a>
        </Link>
        <div className="col-start-2 text-center">
          <TextLogo lg />
        </div>

        <Button
          onClick={async () => {
            const geo = await getGeocoder();
            const loc = await geo({
              location: { lat: latLngRef.current.lat(), lng: latLngRef.current.lng() },
            });
            const area = loc.results[0].address_components.find(
              (address) =>
                address.types.includes("political") || address.types.includes("political")
            ).short_name;

            const user = {
              name: session.user.name,
              email: session.user.email,
              picture: session.user.image,
              userFrom: localStorage.getItem("userFrom") as "google" | "facebook",
              latitude: latLngRef.current.lat(),
              longitude: latLngRef.current.lng(),
              area,
            };

            console.log(user);
            const res = await register(user);
            if (res.statusCode === 200) {
              console.log(res);
              const user = res.value;
              const { userId, name, bio, picture, _id } = user;
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
              router.push("/home");
            } else {
              router.push("/");
            }
          }}
          primary
          pill
          styles="justify-self-end px-3 py-1 md:px-5 md:py-1"
        >
          Done
        </Button>
      </nav>
      <section className="container mx-auto max-w-5xl flex flex-col gap-5 p-6 lg:p-8">
        <h2 className="font-bold text-lg leading-none">Confirm Location</h2>
        <span className="text-gray-400 text-sm leading-none">
          Click on the map to choose the precise location
        </span>
        <div ref={mapref} className="h-96 w-full max-h-[80%] max-w-5xl" />
      </section>
      <footer className="fixed bottom-0 w-full text-center py-3 text-primary">Padosi © 2021</footer>
    </>
  );
}

export default ConfirmLocationPage;
