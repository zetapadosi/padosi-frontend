import Button from "../shared/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full pt-32 lg:pt-64 mx-auto max-w-6xl px-5 flex flex-col lg:flex-row gap-y-9 lg:gap-x-28 lg:justify-center items-center lg:items-start">
      <div className="grid gap-y-4 text-center max-w-lg lg:text-left">
        <h1 className="font-acme text-5xl text-primary">Padosi</h1>
        <h2 className="hidden text-2xl font-bold lg:block dark:text-primary-light">
          Padosi helps you connect to your neighbors and community.
        </h2>
      </div>
      <h2 className="text-xl max-w-sm text-primary-light text-center font-bold lg:hidden">
        Padosi helps you connect to your neighbors and community.
      </h2>
      <div className="w-11/12 max-w-sm flex flex-col gap-y-6">
        <Button primary>Log in with Facebook</Button>
        <Button secondary>Log in with Google</Button>
      </div>
      <div className="absolute bottom-0">
        <Image src="/community.jpg" height={300} width={350} />
      </div>
    </div>
  );
}