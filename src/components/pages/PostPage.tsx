import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPost } from "../../api/post";
import FullPageLoader from "../FullPageLoader";
import MobileHome from "../layouts/MobileHome";
import PostCard from "../PostCard";

export default function PostPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({
    postId: null,
    comments: null,
    createdAt: null,
    likes: null,
    postText: null,
    postedBy: null,
    tags: null,
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const main = async () => {
      const data = await getPost(id);
      console.log(data);
      setPost(data);
      setIsLoading(false);
    };
    main();
  }, []);

  return (
    <MobileHome post>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <PostCard
          full
          key={post.postId}
          postId={post.postId}
          comments={post.comments}
          createdAt={post.createdAt}
          likes={post.likes}
          postText={post.postText}
          name={post.postedBy.name}
          picture={post.postedBy.picture}
          tags={post.tags}
          postedBy={post.postedBy.userId}
        />
      )}
    </MobileHome>
  );
}
