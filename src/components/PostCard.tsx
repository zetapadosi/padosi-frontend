import Link from "next/link";
import { ThumbUpIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import Tag from "./Tag";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PostCard({
  full,
  comments,
  createdAt,
  likes,
  postText,
  name,
  picture,
  tags,
  userId,
  postId,
}: Props) {
  const d = new Date(createdAt);
  const date = d.toDateString();
  const time = d.toLocaleTimeString();
  const text = postText;
  const previewText = text.substr(0, 300);
  const router = useRouter();

  return (
    <div className="relative px-5 py-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
      <div className="flex mb-4 w-max" onClick={() => router.push(`/profile/${userId}`)}>
        <div className="relative rounded-full h-12 w-12 overflow-hidden">
          <Image src={picture} layout="fill" />
        </div>
        <div className="ml-2 mt-0.5">
          <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
            {name}
          </span>
          <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
            {date} at {time}
          </span>
        </div>
      </div>
      <DotsVerticalIcon className="w-5 absolute right-6 top-6 text-gray-400" />
      <div className="flex mb-3 gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <Tag key={`${i} ${tag}`}>{tag}</Tag>
        ))}
      </div>
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal whitespace-pre-wrap">
        {full ? text : previewText}
        {text !== previewText && "..."}
      </p>
      {!full && text !== previewText && (
        <Link href="/post/id">
          <a className="text-blue-500">Read More</a>
        </Link>
      )}
      <div className="flex justify-between items-center mt-5">
        <div className="flex">
          <ThumbUpIcon className="w-5 text-gray-500" />
          <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">{likes.length}</span>
        </div>
        <Link href="/post/id">
          <a className="text-blue-500">
            <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
              {comments.length} comments
            </div>
          </a>
        </Link>
      </div>
      {full && (
        <>
          <h3 className="mb-4 mt-4 text-lg font-semibold text-gray-900">Comments</h3>
          <div className="flex items-center">
            <img
              className="w-9 h-9 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <div className="ml-2 flex-grow">
              <input className="w-full border-2 p-2 rounded-md" placeholder="Write a comment.." />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface Props {
  full?: boolean;
  comments: Array<Object>;
  createdAt: string;
  postId: string;
  userId: string;
  likes: Array<Object>;
  postText: string;
  name: string;
  picture: string;
  tags: Array<String>;
}
