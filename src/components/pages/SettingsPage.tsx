import { signOut as oAuthLogout } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "../../api/auth";
import { useAppDispatch } from "../../hooks/useRedux";
import { clearUser } from "../../redux/userSlice";

import MobileHome from "../layouts/MobileHome";
export default function SettingsPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <MobileHome settings>
      <h3 className="font-bold text-left text-xl p-2 text-primary">Settings</h3>
      <div className="w-full bg-white cursor-pointer">
        <Link href="/settings/bio">
          <a>
            <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-primary-bg transition duration-150">
              Bio
            </span>
          </a>
        </Link>
        <Link href="/settings/radius">
          <a>
            <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-primary-bg transition duration-150">
              Radius
            </span>
          </a>
        </Link>
        <span
          className="border-[1px] text-red-600 border-gray-300 font-medium py-4 px-4 block hover:bg-primary-bg transition duration-150"
          onClick={async () => {
            dispatch(clearUser());
            localStorage.removeItem("padosiEmail");
            localStorage.removeItem("userFrom");
            await signOut();
            await oAuthLogout({ callbackUrl: "http://localhost:3000" });
          }}
        >
          Logout
        </span>
      </div>
    </MobileHome>
  );
}
