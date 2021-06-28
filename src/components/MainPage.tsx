import { HomeIcon, SearchIcon, UserIcon, PlusIcon } from "@heroicons/react/outline";

export default function MainPage() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex-grow overflow-y-scroll"></div>
      <div className="rounded-full bg-primary h-10 w-10 p-2 absolute bottom-14 right-6 text-white shadow-sm">
        <PlusIcon className="h-full" />
      </div>
      <nav className="bg-white h-9 flex justify-between">
        <HomeIcon className="h-full py-2 flex-grow text-primary" />
        <SearchIcon className="h-full py-2 flex-grow" />
        <UserIcon className="h-full py-2 flex-grow" />
      </nav>
    </div>
  );
}
