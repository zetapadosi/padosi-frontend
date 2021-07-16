import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetWallPostsQuery } from "../../api/padosiApi";
import { getWallPosts } from "../../api/post";
import { useAppSelector } from "../../hooks/useRedux";
import FullPageLoader from "../FullPageLoader";
import MobileHome from "../layouts/MobileHome";
import NewPostButton from "../NewPostButton";
import PostCardList from "../PostCardList";
import Spinner from "../Spinner";

export default function MainPage() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const main = async () => {
      const data = await getWallPosts(page);
      console.log(data);

      if (data.length < 10) setHasMore(false);
      setPosts([...posts, ...data]);
      setIsLoading(false);
    };
    main();
  }, [page]);

  return (
    <MobileHome home>
      {isLoading ? (
        <FullPageLoader />
      ) : posts?.length > 0 ? (
        <>
          <InfiniteScroll
            dataLength={posts.length}
            next={() => {
              setPage(page + 1);
            }}
            loader={<div className="text-center mt-4">Loading...</div>}
            hasMore={hasMore}
            endMessage={
              <p className="text-center mt-4">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <PostCardList posts={posts} />
            {/* <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Get more
          </button> */}
          </InfiniteScroll>
          <NewPostButton />
        </>
      ) : (
        posts?.length === 0 && (
          <div className="mt-[50%] flex flex-col px-8 gap-5 font-semibold text-center justify-center">
            Welcome to Padosi! Seems like there are no posts in your area yet. Why not be the first
            one to create!
            <NewPostButton text />
          </div>
        )
      )}
    </MobileHome>
  );
}
