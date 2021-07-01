import { HomeIcon, SearchIcon, UserIcon, PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import PostCard from "./PostCard";

export default function MainPage() {
  return (
    <div className="h-full flex flex-col justify-between overflow-y-scroll">
      <div className="container mx-auto max-w-2xl flex-grow flex flex-col gap-4 p-3 mb-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="rounded-full bg-primary h-10 w-10 p-2 absolute bottom-14 right-6 text-white shadow-sm">
        <PlusIcon className="h-full" />
      </div>
      <nav className="bg-white h-10 flex fixed bottom-0 w-full">
        <HomeIcon className="h-full py-2 flex-grow border-t-2 border-primary text-primary" />
        <SearchIcon className="h-full flex-grow py-2 border-t-2" />
        <UserIcon className="h-full flex-grow py-2 border-t-2" />
      </nav>
    </div>
  );
}
