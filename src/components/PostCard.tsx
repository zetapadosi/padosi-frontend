import Link from "next/link";
import { ThumbUpIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpSolid } from "@heroicons/react/solid";
import Tag from "./Tag";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { addComment, likePost } from "../api/post";
import { useAppSelector } from "../hooks/useRedux";

export default function PostCard(props: Props) {
  console.log(props);
  const {
    postText: text,
    postedBy: by,
    hasLiked,
    createdAt,
    likes,
    comments,
    postId,
    tags,
    selfPosted,
    full,
  } = props;
  const d = new Date(createdAt),
    date = d.toDateString(),
    time = d.toLocaleTimeString(),
    previewText = text.substr(0, 300),
    router = useRouter(),
    [isLiked, setIsLiked] = useState(false),
    timerRef = useRef(null),
    [isDropdownVisible, setIsDropdownVisible] = useState(false),
    userPicture = useAppSelector((state) => state.user.picture),
    postedBy = by.userId,
    picture = by.picture,
    name = by.name;

  // console.log(comments);

  return (
    <div className="relative px-5 py-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
      <div className="flex mb-4 w-max" onClick={() => router.push(`/profile/${postedBy}`)}>
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
      <DotsVerticalIcon
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="w-5 absolute right-6 top-6 text-gray-400"
      />
      {isDropdownVisible && (
        <div className="absolute w-1/2 right-12 top-7 bg-white">
          {selfPosted && (
            <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
              Delete
            </span>
          )}
        </div>
      )}
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
        <Link href={`/post/${postId}`}>
          <a className="text-blue-500">Read More</a>
        </Link>
      )}
      <div className="flex justify-between items-center mt-5">
        <div
          className="flex"
          onClick={() => {
            clearTimeout(timerRef.current);
            const likeData = { postId, userId: id };
            setIsLiked(true);
            timerRef.current = setTimeout(async () => {
              const res = await likePost(likeData);
              console.log(res);
            }, 300);
          }}
        >
          {isLiked ? (
            <ThumbUpSolid className="w-5 text-primary" />
          ) : (
            <ThumbUpIcon className="w-5 text-gray-500" />
          )}
          <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">{likes.length}</span>
        </div>
        <Link href={`/post/${postId}`}>
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
            <img className="w-9 h-9 rounded-full" src={userPicture} />
            <div className="ml-2 flex-grow">
              <input
                onKeyPress={async (e) => {
                  const inp = e.target as HTMLInputElement;
                  if (e.key === "Enter" && inp.value.length > 30) {
                    console.log(inp.value.length);

                    const commmentData = {
                      commentText: inp.value,
                      postId,
                      userId: id,
                    };
                    console.log(commmentData);

                    const data = await addComment(commmentData);
                    console.log(data);
                  }
                }}
                className="w-full border-2 p-2 rounded-md"
                placeholder="Write a comment.."
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-2 mt-5">
            {comments.map((comment) => (
              <Comment {...comment} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const Comment = ({ commentText, postedBy: { name, picture, userId: commentor }, created }) => {
  const d = new Date(created);
  const date = d.toDateString();
  const time = d.toLocaleTimeString();
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="flex w-max items-center" onClick={() => router.push(`/profile/${commentor}`)}>
      <div className="relative rounded-full w-9 h-9 overflow-hidden">
        <Image src="/logo.png" layout="fill" />
      </div>
      <div className="ml-2 mt-0.5">
        <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
          {name}
        </span>
        <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
          {date} at {time}
        </span>
      </div>
      <DotsVerticalIcon
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="w-5 absolute right-2 top-4 text-gray-400"
      />
      {isDropdownVisible && (
        <div className="absolute w-1/2 right-12 top-7 bg-white">
          {userId === commentor && (
            <span className="border-[1px] border-gray-300 font-medium py-4 px-4 block hover:bg-gray-100 transition duration-150">
              Delete
            </span>
          )}
        </div>
      )}
    </div>
  );
};

interface Props {
  full?: boolean;
  comments: Array<Object>;
  hasLiked?: boolean;
  selfPosted?: boolean;
  createdAt: string;
  postId: string;
  postedBy: {
    name: string;
    picture: string;
    userId: string;
  };
  likes: Array<Object>;
  postText: string;
  name: string;
  picture: string;
  tags: Array<String>;
}

interface CommentProps {
  commentText: string;
  postedBy: {
    name: string;
  };
}
