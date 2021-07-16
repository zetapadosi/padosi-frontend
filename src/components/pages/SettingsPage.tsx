import { signOut as oAuthLogout } from "next-auth/client";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signOut } from "../../api/auth";
import { clearUser } from "../../redux/userSlice";

import MobileHome from "../layouts/MobileHome";
export default function SettingsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <MobileHome settings>
      <h3 className="font-bold text-left text-xl p-3">Settings</h3>
      <div className="w-full bg-white">
        <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Bio
        </span>
        <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Appearance
        </span>
        <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Location
        </span>
        <span
          className="border-[1px] text-red-600 border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150"
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
