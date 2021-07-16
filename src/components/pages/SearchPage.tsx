import MobileHome from "../layouts/MobileHome";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Tag from "../Tag";
import { TrendingUpIcon, SupportIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { searchPostsByTags } from "../../api/post";
import FullPageLoader from "../FullPageLoader";
import PostCardList from "../PostCardList";

export default function SearchPage() {
  const userId = useAppSelector((state) => state.user.userId);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  return (
    <MobileHome search>
      <div className="relative">
        <Input ref={inputRef} placeholder="Enter tags separated with a comma ( , )" />
        {inputRef.current?.value && (
          <XIcon
            className="w-4 absolute right-4 top-5"
            onClick={() => {
              setPosts([]);
              inputRef.current.value = "";
            }}
          />
        )}
      </div>
      <Button
        full
        primary
        onClick={async () => {
          setLoading(true);
          const tags = inputRef.current.value.split(",").map((tag) => tag.trim());
          const postsData = await searchPostsByTags(userId, {
            tags,
          });
          setPosts(postsData);
          setLoading(false);
        }}
      >
        Search
      </Button>
      <div className="mt-5">{loading ? <FullPageLoader /> : <PostCardList posts={posts} />}</div>
    </MobileHome>
  );
}

{
  /* <TrendingUpIcon className="w-5" />
        <h1 className="font-bold">Trending Today</h1>
      </div>
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Tag>garbage problem</Tag>
        </li>
        <li>
          <Tag>food event</Tag>
        </li>
        <li>
          <Tag>elections</Tag>
        </li>
        <li>
          <Tag>diwali</Tag>
        </li>
        <li>
          <Tag>annual day</Tag>
        </li>
      </ol>
      <div className="flex items-center mt-5 gap-2">
        <SupportIcon className="w-5" />
        <h1 className="font-bold">Special Tags</h1>
      </div>
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Tag>urgent</Tag>
        </li>
        <li>
          <Tag>emergency</Tag>
        </li>
      </ol> */
}
