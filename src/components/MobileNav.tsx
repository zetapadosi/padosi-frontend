import { CogIcon, HomeIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import classnames from "classnames";
import { useRouter } from "next/router";

export default function MobileNav({ home, search, profile, settings }: Props) {
  const router = useRouter();
  return (
    <nav className="bg-white h-10 flex fixed bottom-0 w-full">
      <HomeIcon
        className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
          ["border-primary text-primary"]: home,
        })}
        onClick={() => router.push("/home")}
      />
      <SearchIcon
        className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
          ["border-primary text-primary"]: search,
        })}
        onClick={() => router.push("/search")}
      />
      <UserIcon
        className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
          ["border-primary text-primary"]: profile,
        })}
        onClick={() => router.push("/profile/id")}
      />
      <CogIcon
        className={classnames("grid place-content-center flex-grow border-t-2 py-2", {
          ["border-primary text-primary"]: settings,
        })}
        onClick={() => router.push("/settings")}
      />
    </nav>
  );
}

interface Props {
  home?: boolean;
  search?: boolean;
  profile?: boolean;
  settings?: boolean;
}