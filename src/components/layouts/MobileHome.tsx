import MobileNav from "../MobileNav";
import Button from "../Button";
import { PlusIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

export default function MobileHome({ children, home, search, profile, settings }: Props) {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-full container mx-auto max-w-2xl flex-grow p-3 mb-10 flex flex-col gap-4 overflow-y-scroll">
        {children ||
          (home && (
            <div className="h-full flex flex-col gap-5 font-semibold text-center justify-center">
              Welcome to Padosi! Seems like there are no posts in your area yet. Why not be the
              first one to create!
              <Button primary onClick={() => router.push("/new-post")}>
                Create Post
              </Button>
            </div>
          ))}
      </div>
      {home && children && (
        <div className="rounded-full bg-primary h-10 w-10 p-2 fixed bottom-14 right-6 text-white shadow-sm">
          <PlusIcon className="h-full" onClick={() => router.push("/new-post")} />
        </div>
      )}
      <MobileNav home={home} search={search} profile={profile} settings={settings} />
    </div>
  );
}

interface Props {
  home?: boolean;
  search?: boolean;
  profile?: boolean;
  settings?: boolean;
  children: unknown;
}
