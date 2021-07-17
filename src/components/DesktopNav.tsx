import { CogIcon, HomeIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { signOut } from "../api/auth";
import { signOut as oAuthLogout } from "next-auth/client";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { clearUser } from "../redux/userSlice";
import Button from "./Button";
import TextLogo from "./TextLogo";

export default function DesktopNav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false),
    inputRef = useRef(null),
    user = useAppSelector((state) => state.user),
    router = useRouter(),
    dispatch = useAppDispatch();

  const searchHandler = () => {
    const tags = inputRef.current.value;
    router.push(`/search?tags=${tags}`);
  };

  return (
    <nav className="grid grid-cols-3 h-14 px-4 items-center bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="flex items-center gap-5">
        <Link href={`/home`}>
          <a>
            <div className="relative h-10 w-10 overflow-hidden">
              <Image src="/logo.png" layout="fill" quality={100} />
            </div>
          </a>
        </Link>
        <div className="relative">
          <input
            ref={inputRef}
            onKeyPress={(e) => {
              if (e.key === "Enter") searchHandler();
            }}
            type="text"
            placeholder="Search posts by tags"
            className="bg-primary-bg rounded-full text-sm w-64 h-9 outline-none px-3"
          />
          <SearchIcon
            onClick={searchHandler}
            className="absolute w-5 top-2 right-3 text-primary cursor-pointer"
          />
        </div>
      </div>
      <div className="text-center">
        <TextLogo lg />
      </div>
      <div
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="flex items-center justify-self-end gap-2 text-primary font-medium cursor-pointer"
      >
        <div className="relative rounded-full h-10 w-10 overflow-hidden">
          <Image src={user.picture || "/logo.png"} layout="fill" />
        </div>
        {user.name}
      </div>
      {isDropdownVisible && (
        <div className="flex flex-col absolute w-44 right-2 top-16">
          <Link href={`/profile/${user.userId}`}>
            <a>
              <Button styles="border-2" full>
                Profile
              </Button>
            </a>
          </Link>
          <Link href={`/settings`}>
            <a>
              <Button styles="border-2" full>
                Settings
              </Button>
            </a>
          </Link>
          <Button
            styles="border-2 text-red-400"
            onClick={async () => {
              dispatch(clearUser());
              localStorage.removeItem("padosiEmail");
              localStorage.removeItem("userFrom");
              await signOut();
              await oAuthLogout({ callbackUrl: "http://localhost:3000" });
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
}
