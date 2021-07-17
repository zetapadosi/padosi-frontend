import { CogIcon, HomeIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import classnames from "classnames";
import Link from "next/link";
import { useAppSelector } from "../hooks/useRedux";

export default function MobileNav({ home, search, profile, settings }: Props) {
  const userId = useAppSelector((state) => state.user.userId);
  return (
    <nav className="bg-white h-11 flex fixed bottom-0 w-full">
      <Link href="/home">
        <a
          className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
            ["border-primary text-primary"]: home,
          })}
        >
          <HomeIcon className="h-full w-full" />
        </a>
      </Link>
      <Link href="/search">
        <a
          className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
            ["border-primary text-primary"]: search,
          })}
        >
          <SearchIcon className="h-full w-full" />
        </a>
      </Link>
      <Link href={`/profile/${userId}`}>
        <a
          className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
            ["border-primary text-primary"]: profile,
          })}
        >
          <UserIcon className="h-full w-full" />
        </a>
      </Link>
      <Link href="/settings">
        <a
          className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
            ["border-primary text-primary"]: settings,
          })}
        >
          <CogIcon className="h-full w-full" />
        </a>
      </Link>
    </nav>
  );
}

interface Props {
  home?: boolean;
  search?: boolean;
  profile?: boolean;
  settings?: boolean;
}
