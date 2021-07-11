import { signIn as oAuthLogin } from "next-auth/client";
import Button from "../Button";
import Image from "next/image";
import TextLogo from "../TextLogo";

const tagline = "Padosi helps you connect to your neighbors and community.";

export default function LoginPage() {
  return (
    <div className="h-full pt-[13vh] lg:pt-64 mx-auto max-w-6xl px-5 flex flex-col lg:flex-row gap-y-9 lg:gap-x-28 lg:justify-center items-center lg:items-start">
      <div className="grid gap-y-4 text-center max-w-lg lg:text-left">
        <TextLogo xl />
        <h2 className="hidden text-2xl font-bold lg:block dark:text-primary-light">{tagline}</h2>
      </div>
      <h2 className="text-xl max-w-sm text-primary-light text-center font-bold lg:hidden">
        {tagline}
      </h2>
      <div className="w-11/12 z-10 max-w-sm flex flex-col gap-y-6">
        <Button
          primary
          full
          styles="shadow"
          onClick={() => {
            oAuthLogin("facebook", { callbackUrl: "http://localhost:3000" });
            localStorage.setItem("userFrom", "facebook");
          }}
        >
          Log in with Facebook
        </Button>
        <Button
          full
          styles="shadow"
          onClick={() => {
            oAuthLogin("google", { callbackUrl: "http://localhost:3000" });
            localStorage.setItem("userFrom", "google");
          }}
        >
          Log in with Google
        </Button>
      </div>
      <div className="absolute -bottom-0 h-[35vh] w-[70vw] animate-fade">
        <Image src="/community.webp" layout="fill" objectFit="contain" objectPosition="bottom" />
      </div>
    </div>
  );
}
