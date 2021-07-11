import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Image from "next/image";
import usePlaces from "../../hooks/usePlaces";
import { useAppSelector } from "../../hooks/useRedux";
import MobileHome from "../layouts/MobileHome";
import PostCardList from "../PostCardList";

export default function ProfilePage() {
  const name = useAppSelector((state) => state.user.name);
  const picture = useAppSelector((state) => state.user.picture);
  const followers = useAppSelector((state) => state.user.followers);
  const following = useAppSelector((state) => state.user.following);
  const joined = useAppSelector((state) => state.user.joined);
  const location = useAppSelector((state) => state.user.location);
  const bio = useAppSelector((state) => state.user.bio);

  const { getGeocoder } = usePlaces();
  const [area, setArea] = useState("");

  // useEffect(() => {
  //   const main = async () => {
  //     const geo = await getGeocoder();
  //     const res = await geo({ location });
  //     // console.log(res);
  //     setArea(res.results[0].formatted_address);
  //   };
  //   main();
  // });

  return (
    <MobileHome profile>
      <div className="p-4">
        <div className="flex items-center">
          <div className="relative rounded-full h-28 w-28 min-w-[7rem] overflow-hidden">
            <Image src={picture} layout="fill" />
          </div>
          <div className="ml-6">
            <div className="">
              <span className="block mb-2 font-medium text-xl text-black dark:text-gray-100">
                {name}
              </span>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="block">
                  <span className="flex items-center gap-2">
                    <LocationMarkerIcon className="inline w-5 min-w-[1.25rem]" />
                    <span>Random Vihar</span>
                  </span>
                </span>
                <span className="block mb-2 mt-1">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="inline w-5" /> Joined {joined}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="flex justify-around mt-3 text-sm text-gray-500 dark:text-gray-400">
          <span>
            <span className="font-medium">23</span> posts
          </span>
          <span>•</span>
          <span>
            <span className="font-medium">{followers}</span> followers
          </span>
          <span>•</span>
          <span>
            <span className="font-medium">{following}</span> following
          </span>
        </span>
        <div className="mt-3 leading-tight text-sm font-medium dark:text-gray-100">{bio}</div>
      </div>
      <PostCardList posts={[]} />
    </MobileHome>
  );
}
