import Link from "next/link";
import classnames from "classnames";
import MobileNav from "../MobileNav";
import Button from "../Button";
import { PlusIcon } from "@heroicons/react/outline";

export default function MobileHome({ children, home, search, profile, post, settings }: Props) {
  return (
    <>
      <div
        className={classnames("container mx-auto max-w-2xl flex flex-col gap-4 p-3", {
          ["pb-20"]: home || profile || post,
        })}
      >
        {children}
      </div>
      {home && !children && (
        <div className="mt-[50%] flex flex-col px-8 gap-5 font-semibold text-center justify-center">
          Welcome to Padosi! Seems like there are no posts in your area yet. Why not be the first
          one to create!
          <Link href="/new-post">
            <a className="">
              <Button primary>Create Post</Button>
            </a>
          </Link>
        </div>
      )}
      {home && children && (
        <Link href="/new-post">
          <a className="rounded-full bg-primary h-11 w-11 p-2 fixed bottom-14 right-6 text-white shadow-sm">
            <PlusIcon className="h-full w-full" />
          </a>
        </Link>
      )}
      <div className="lg:hidden">
        <MobileNav home={home} search={search} profile={profile} settings={settings} />
      </div>
    </>
  );
}

interface Props {
  home?: boolean;
  search?: boolean;
  profile?: boolean;
  post?: boolean;
  settings?: boolean;
  children?: unknown;
}
