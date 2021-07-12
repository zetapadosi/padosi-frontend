import { useGetWallPostsQuery } from "../../api/padosiApi";
import { useAppSelector } from "../../hooks/useRedux";
import FullPageLoader from "../FullPageLoader";
import MobileHome from "../layouts/MobileHome";
import NewPostButton from "../NewPostButton";
import PostCardList from "../PostCardList";

export default function MainPage() {
  const userId = useAppSelector((state) => state.user.userId);

  const { data: posts, isLoading } = useGetWallPostsQuery(userId);

  return (
    <MobileHome home>
      {isLoading ? (
        <FullPageLoader />
      ) : posts?.value.length > 0 ? (
        <>
          <PostCardList posts={posts.value} />
          <NewPostButton />
        </>
      ) : (
        posts?.value.length === 0 && (
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
