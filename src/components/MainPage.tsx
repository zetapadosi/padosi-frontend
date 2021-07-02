import { PlusIcon } from "@heroicons/react/outline";

import PostCard from "./PostCard";
import MobileHome from "./layouts/MobileHome";

export default function MainPage() {
  return (
    <MobileHome home>
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="rounded-full bg-primary h-10 w-10 p-2 fixed bottom-14 right-6 text-white shadow-sm">
        <PlusIcon className="h-full" />
      </div>
    </MobileHome>
  );
}
