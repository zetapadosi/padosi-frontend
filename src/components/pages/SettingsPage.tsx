import MobileHome from "../layouts/MobileHome";
export default function SettingsPage() {
  return (
    <MobileHome settings>
      <h3 className="font-bold text-left text-xl">Settings</h3>
      <div className="mt-5 w-full bg-white">
        <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Profile
        </span>
        <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Appearance
        </span>
        <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Location
        </span>
        <span className="border-[1px] text-red-600 border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
          Logout
        </span>
      </div>
    </MobileHome>
  );
}
