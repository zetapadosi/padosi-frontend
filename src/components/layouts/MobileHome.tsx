import Link from "next/link";
import classnames from "classnames";
import MobileNav from "../MobileNav";
import Button from "../Button";
import { PlusIcon } from "@heroicons/react/outline";
import DesktopNav from "../DesktopNav";

export default function MobileHome({ children, home, search, profile, post, settings }: Props) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="container mx-auto max-w-2xl flex flex-col gap-4 p-3 pb-20 lg:pt-20">
        {children}
      </div>
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
