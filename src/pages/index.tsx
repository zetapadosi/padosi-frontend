import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextLogo from "../components/TextLogo";

const tagline = "Padosi helps you connect to your neighbors and community.";

export default function Home() {
  return (
    <>
      <div className="h-full pt-[13vh] lg:pt-64 mx-auto max-w-6xl px-5 flex flex-col lg:flex-row gap-y-9 lg:gap-x-28 lg:justify-center items-center lg:items-start">
        <div className="grid gap-y-4 text-center max-w-lg lg:text-left">
          <TextLogo xl />
          <h2 className="hidden text-2xl font-bold lg:block dark:text-primary-light">{tagline}</h2>
        </div>
        <h2 className="text-xl max-w-sm text-primary-light text-center font-bold lg:hidden">
          {tagline}
        </h2>
        <div className="w-11/12 z-10 max-w-sm flex flex-col gap-y-6">
          <Link href="/select-location">
            <a>
              <Button primary full styles="shadow">
                Log in with Facebook
              </Button>
            </a>
          </Link>
          <Link href="https://padosi-backend.herokuapp.com/api/auth/google">
            <a>
              <Button full styles="shadow">
                Log in with Google
              </Button>
            </a>
          </Link>
        </div>
        <div className="absolute -bottom-0 h-[35vh] w-[70vw] animate-fade">
          <Image src="/community.webp" layout="fill" objectFit="contain" objectPosition="bottom" />
        </div>
      </div>
    </>
  );
}
