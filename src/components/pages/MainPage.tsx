import { useEffect, useRef, useState } from "react";
import { getWallPosts } from "../../api/post";
import MobileHome from "../layouts/MobileHome";
import NewPostButton from "../NewPostButton";
import PostCardList from "../PostCardList";

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
      <PostCardList
        home
        setPage={setPage}
        page={page}
        posts={posts}
        isLoading={isLoading}
        hasMore={hasMore}
        setPosts={setPosts}
      />
      {posts.length > 0 && <NewPostButton />}
    </MobileHome>
  );
}
