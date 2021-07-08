import PostCard from "./PostCard";

export default function PostCardList({ posts }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            comments={post.comments}
            createdAt={post.createdAt}
            likes={post.likes}
            postText={post.postText}
            name={post.postedBy.name}
            picture={post.postedBy.picture}
            tags={post.tags}
          />
        );
      })}
    </div>
  );
}
