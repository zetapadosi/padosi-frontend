import { ThumbUpIcon } from "@heroicons/react/outline";
import Tag from "./Tag";

export default function PostCard() {
  return (
    <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg">
      <div className="flex mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="ml-2 mt-0.5">
          <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
            Loyce Kuvalis
          </span>
          <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
            16 December at 08:25
          </span>
        </div>
      </div>
      <div className="flex mb-3 gap-2 flex-wrap">
        <Tag>politics</Tag>
        <Tag>event</Tag>
        <Tag>COoking contest</Tag>
        <Tag>urgent</Tag>
        <Tag>emergency</Tag>
      </div>
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex justify-between items-center mt-5">
        <div className="flex">
          <ThumbUpIcon className="w-5 text-gray-500" />
          <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">8</span>
        </div>
        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">33 comments</div>
      </div>
    </div>
  );
}
