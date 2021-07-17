import { LocationMarkerIcon, CalendarIcon, PencilAltIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "../../hooks/useRedux";
import MobileHome from "../layouts/MobileHome";
import PostCardList from "../PostCardList";
import { getUserProfile } from "../../api/user";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [isSelfProfile, setIsSelfProfile] = useState(false);
  const [userData, setUserData] = useState({
    picture: null,
    name: null,
    area: null,
    joined: null,
    bio: null,
  });

  let user = useAppSelector((state) => state.user);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    const main = async () => {
      setIsLoading(true);
      const profileId = id as string;
      console.log({ profileId, current: user.userId });
      if (profileId === user.userId) {
        setUserData(user);
        setIsSelfProfile(true);
      } else {
        setIsSelfProfile(false);
      }
      const data = await getUserProfile(profileId);
      console.log(data);
      if (profileId !== user.userId) setUserData(data.user);
      data.userPost.reverse();
      const postsArray = data.userPost;
      if (postsArray.length < 10) setHasMore(false);
      setPosts(postsArray);
      setIsLoading(false);
    };
    main();
  }, [id]);

  return (
    <MobileHome profile={isSelfProfile}>
      <div className="p-4">
        <div className="flex items-center">
          <div className="relative rounded-full h-28 w-28 min-w-[7rem] overflow-hidden">
            <Image src={userData.picture || "/logo.png"} layout="fill" />
          </div>
          <div className="ml-6">
            <div className="">
              <span className="block mb-1 font-medium text-xl text-black dark:text-gray-100">
                {userData.name}
              </span>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="mb-1 flex items-center gap-2">
                  <LocationMarkerIcon className="inline w-5 min-w-[1.25rem]" />
                  <span>{userData.area || "Random Vihar"}</span>
                </span>
                <span className="mb-1 flex items-center gap-2">
                  <CalendarIcon className="inline w-5" />
                  <span>Joined {userData.joined}</span>
                </span>
                <span className="flex items-center gap-2">
                  <PencilAltIcon className="inline w-5" />
                  <span>
                    {!isLoading && <span className="font-medium">{posts.length} </span>}
                    {posts.length === 1 ? "post" : "posts"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {userData.bio && (
          <div className="mt-3 leading-tight text-sm font-medium dark:text-gray-100">
            {userData.bio}
          </div>
        )}
      </div>
      <PostCardList
        profile
        posts={posts}
        page={page}
        setPosts={setPosts}
        setPage={setPage}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </MobileHome>
  );
}
