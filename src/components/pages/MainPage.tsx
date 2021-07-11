import { useEffect, useState } from "react";
import { getWallPosts } from "../../api/post";
import { useAppSelector } from "../../hooks/useRedux";
import FullPageLoader from "../FullPageLoader";
import MobileHome from "../layouts/MobileHome";
import PostCardList from "../PostCardList";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useAppSelector((state) => state.user.userId);
  useEffect(() => {
    const main = async () => {
      const res = await getWallPosts(userId);
      console.log(res.value);
      setPosts(res.value);
      setLoading(false);
    };
    main();
  }, []);

  return (
    <MobileHome home>
      {loading && <FullPageLoader />}
      {posts?.length ? <PostCardList posts={posts} /> : null}
    </MobileHome>
  );
}
