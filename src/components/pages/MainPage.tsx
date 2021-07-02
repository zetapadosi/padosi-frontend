import PostCard from "../PostCard";
import MobileHome from "../layouts/MobileHome";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/profile");
    router.prefetch("/search");
    router.prefetch("/settings");
    router.prefetch("/new-post");
  }, []);

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
