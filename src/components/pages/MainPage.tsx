import PostCard from "../PostCard";
import MobileHome from "../layouts/MobileHome";

export default function MainPage() {
  return (
    <MobileHome home>
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </MobileHome>
  );
}
