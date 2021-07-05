import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
import MobileHome from "../layouts/MobileHome";
import PostCardList from "../PostCardList";
export default function ProfilePage() {
  return (
    <MobileHome profile>
      <div className="p-4">
        <div className="flex items-center">
          <img
            className="w-28 h-w-28 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div className="flex-grow ml-6">
            <div className="">
              <span className="block mb-3 font-medium text-xl text-black dark:text-gray-100">
                Loyce Kuvalis
              </span>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="block">
                  <span className="flex items-center gap-2">
                    <LocationMarkerIcon className="inline w-5" /> Preet Vihar
                  </span>
                </span>
                <span className="block mb-2 mt-1">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="inline w-5" /> Joined July 2021
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
            <span className="font-medium">12</span> followers
          </span>
          <span>•</span>
          <span>
            <span className="font-medium">18</span> following
          </span>
        </span>
        <div className="mt-3 leading-tight text-sm font-medium dark:text-gray-100">
          Hi I'm Loyce and I love ❤ cooking and dancing. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis, quos omnis. Ipsam, qui autem sed in non velit labore id natus
          est laboriosam at rerum nulla dolorum quasi? Atque, magnam.
        </div>
      </div>
      <PostCardList />
    </MobileHome>
  );
}
