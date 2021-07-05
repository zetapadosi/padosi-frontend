import PostCard from "./PostCard";

export default function PostCardList() {
  return (
    <div className="flex flex-col gap-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
