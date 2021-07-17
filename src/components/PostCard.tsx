import Link from "next/link";
import { ThumbUpIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpSolid } from "@heroicons/react/solid";
import Tag from "./Tag";
import Button from "./Button";
import Image from "next/image";
import { useRef, useState } from "react";
import { addComment, deleteComment, deletePost, likePost, unlikePost } from "../api/post";
import { useAppSelector } from "../hooks/useRedux";
import Spinner from "./Spinner";

export default function PostCard(props: Props) {
  // console.log(props);
  const {
    postText: text,
    postedBy: by,
    createdAt,
    likes: likesArray,
    comments: commentsArray,
    postId,
    tags,
    full,
    setPosts,
    posts,
  } = props;

  const [isDropdownVisible, setIsDropdownVisible] = useState(false),
    [comments, setComments] = useState(commentsArray),
    [likes, setLikes] = useState(likesArray.length),
    [loadingDeletion, setLoadingDeletion] = useState(false),
    [loadingNewComment, setLoadingNewComment] = useState(false),
    userPicture = useAppSelector((state) => state.user.picture),
    userId = useAppSelector((state) => state.user.userId),
    _id = useAppSelector((state) => state.user._id),
    [isLiked, setIsLiked] = useState(likesArray.includes(_id)),
    timerRef = useRef(null);

  const d = new Date(createdAt),
    date = d.toDateString(),
    time = d.toLocaleTimeString(),
    previewText = text.substr(0, 300),
    postedBy = by.userId,
    picture = by.picture,
    name = by.name;

  console.log(isLiked, likes);

  // console.log(comments);

  return (
    <div className="relative px-5 py-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
      <Link href={`/profile/${postedBy}`}>
        <a>
          <div className="flex mb-4 w-max cursor-pointer">
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
        </a>
      </Link>
      <DotsVerticalIcon
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="w-9 p-2 absolute right-4 top-4 text-gray-400 cursor-pointer"
      />
      {isDropdownVisible && (
        <div className="absolute w-1/2 max-w-[100px] right-12 top-7 bg-white">
          {by.userId === userId && (
            <Button
              isLoading={loadingDeletion}
              onClick={async () => {
                setLoadingDeletion(true);
                const res = await deletePost(postId);
                setLoadingDeletion(false);
                if (res.statusCode === 200)
                  setPosts(posts.filter((post: { postId: string }) => post.postId !== postId));
              }}
              styles="border-2"
              full
            >
              Delete
            </Button>
          )}
        </div>
      )}
      <div className="flex mb-3 gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <Link key={`${i} ${tag}`} href={`/search?tags=${tag}`}>
            <a>
              <Tag>{tag}</Tag>
            </a>
          </Link>
        ))}
      </div>
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal whitespace-pre-wrap">
        {full ? text : previewText}
        {text !== previewText && !full && "..."}
      </p>
      {!full && text !== previewText && (
        <Link href={`/post/${postId}`}>
          <a className="text-blue-500">Read More</a>
        </Link>
      )}
      <div className="flex justify-between items-center mt-5">
        <div
          className="flex cursor-pointer"
          onClick={() => {
            if (isLiked) {
              setIsLiked(false);
              setLikes(likes - 1);
            } else {
              setIsLiked(true);
              setLikes(likes + 1);
            }
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(async () => {
              if (isLiked) await unlikePost({ postId });
              else await likePost({ postId });
            }, 400);
          }}
        >
          {isLiked ? (
            <ThumbUpSolid className="w-5 text-primary" />
          ) : (
            <ThumbUpIcon className="w-5 text-gray-500" />
          )}
          <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">{likes}</span>
        </div>
        <Link href={`/post/${postId}`}>
          <a className="text-blue-500">
            <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
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
                  if (e.key === "Enter") {
                    setLoadingNewComment(true);
                    // console.log(inp.value.length);

                    const commmentData = {
                      commentText: inp.value,
                      postId,
                    };

                    // console.log(commmentData);

                    const data = await addComment(commmentData);
                    // console.log(data);

                    if (data.statusCode === 200) {
                      data.value.comments.reverse();
                      setComments(data.value.comments);
                      setLoadingNewComment(false);
                      inp.value = "";
                    }
                  }
                }}
                className="w-full border-2 p-2 rounded-md"
                placeholder="Write a comment.."
              />
            </div>
            {loadingNewComment && (
              <div className="grid place-items-center">
                <Spinner />
              </div>
            )}
          </div>
          <div className="relative flex flex-col gap-2 mt-5">
            {comments.map((comment: Comment) => (
              <Comment
                key={comment._id}
                {...comment}
                userId={_id}
                comments={comments}
                setComments={setComments}
                postId={postId}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const Comment = (props) => {
  const {
    commentText,
    postedBy: { name, picture, userId: commentor, _id: commentorId },
    created,
    _id: commentId,
    userId,
    postId,
    comments,
    setComments,
  } = props;
  const d = new Date(created);
  const date = d.toDateString();
  const time = d.toLocaleTimeString();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false),
    [loadingDeletion, setLoadingDeletion] = useState(false);

  return (
    <div className="relative border-t-[1px] py-2">
      <Link href={`/profile/${commentor}`}>
        <a>
          <div className="flex w-max items-center">
            <div className="relative rounded-full w-9 h-9 overflow-hidden">
              <Image src={picture || "/logo.png"} layout="fill" />
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
        </a>
      </Link>

      <DotsVerticalIcon
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="w-9 p-2 absolute right-1 top-4 text-gray-400 cursor-pointer"
      />
      {isDropdownVisible && (
        <div className="absolute w-1/2 max-w-[100px] right-10 top-7 bg-white">
          {userId === commentorId && (
            <Button
              isLoading={loadingDeletion}
              onClick={async () => {
                setLoadingDeletion(true);
                const res = await deleteComment({
                  commentId,
                  postId,
                });
                setLoadingDeletion(false);
                if (res.statusCode === 200)
                  setComments(
                    comments.filter((comment: { _id: string }) => comment._id !== commentId)
                  );
              }}
              styles="border-2"
              full
            >
              Delete
            </Button>
          )}
        </div>
      )}
      <p className="mt-2">{commentText}</p>
    </div>
  );
};

interface Props {
  full?: boolean;
  comments: Array<Object>;
  hasLiked?: boolean;
  selfPosted?: boolean;
  createdAt: string;
  setPosts?: Function;
  posts?: object[];
  postId: string;
  postedBy: {
    name: string;
    picture: string;
    userId: string;
  };
  likes: Array<Object>;
  postText: string;
  tags: Array<String>;
}

interface Comment {
  commentText: string;
  _id: string;
  created: string;
  postedBy: {
    name: string;
    picture: string;
    userId: string;
  };
}
