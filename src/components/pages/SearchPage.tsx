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
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

export default function SearchPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [searchStarted, setSearchStarted] = useState(false);
  const router = useRouter();
  const urlTags = router.query.tags;

  const searchHandler = async () => {
    setSearchStarted(true);
    setLoading(true);
    setHasMore(true);
    const tags = inputRef.current.value
      .toLowerCase()
      .split(",")
      .map((tag) => tag.trim());
    // console.log(page, tags);

    const postsData = await searchPostsByTags(page, {
      tags,
    });
    // console.log(postsData);

    if (postsData.length < 10) setHasMore(false);
    setPosts(postsData);
    setLoading(false);
  };

  useEffect(() => {
    if (urlTags) {
      inputRef.current.value = urlTags;
      searchHandler();
    }
  }, [urlTags]);

  return (
    <MobileHome search>
      <div className="relative">
        <Input
          onKeyPress={(e) => {
            if (e.key === "Enter") searchHandler();
          }}
          ref={inputRef}
          placeholder="Enter tags separated with a comma ( , )"
        />
        {inputRef.current?.value && (
          <XIcon
            className="w-4 absolute right-4 top-5 cursor-pointer"
            onClick={() => {
              setPosts([]);
              inputRef.current.value = "";
              setSearchStarted(false);
            }}
          />
        )}
      </div>
      <Button full primary onClick={searchHandler}>
        Search
      </Button>
      <div className="mt-5">
        <PostCardList
          search
          searchStarted={searchStarted}
          posts={posts}
          page={page}
          setPosts={setPosts}
          setPage={setPage}
          hasMore={hasMore}
          isLoading={loading}
        />
      </div>
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
