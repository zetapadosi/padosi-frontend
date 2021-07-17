import PostCard from "./PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import FullPageLoader from "./FullPageLoader";
import NewPostButton from "./NewPostButton";

export default function PostCardList(props) {
  const {
    home,
    search,
    profile,
    page,
    setPage,
    posts,
    setPosts,
    hasMore,
    isLoading,
    searchStarted,
  } = props;

  // console.log(posts);

  if (isLoading) return <FullPageLoader />;
  if (posts?.length > 0)
    return (
      <InfiniteScroll
        dataLength={posts.length}
        next={() => {
          setPage(page + 1);
        }}
        loader={<div className="text-center mt-4">Loading...</div>}
        hasMore={hasMore}
        // endMessage={<p className="text-center mt-4 text-gray-400">No more posts</p>}
      >
        <div className="flex flex-col gap-4 pb-2">
          {posts.map((post) => {
            return <PostCard key={post.postId} {...post} setPosts={setPosts} posts={posts} />;
          })}
        </div>
      </InfiniteScroll>
    );
  if (posts?.length === 0) {
    return (
      <div className="mt-[50%] flex flex-col px-8 gap-5 font-semibold text-center justify-center">
        {home &&
          "Welcome to Padosi! Seems like there are no posts in your area yet. Why not be the first one to create!"}
        {search && searchStarted && "Could not find any posts"}

        {home && <NewPostButton text />}
      </div>
    );
  }
}
