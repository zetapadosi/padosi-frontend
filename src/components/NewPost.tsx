import { useRouter } from "next/router";
import { useState } from "react";
import { createPost } from "../api/post";
import { useAppSelector } from "../hooks/useRedux";
import Button from "./Button";
import Tag from "./Tag";

export default function NewPost() {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [postText, setPostText] = useState("");
  const router = useRouter();
  return (
    <>
      <h3 className="font-bold text-left text-xl p-2 text-primary">Create New Post</h3>
      <textarea
        className="rounded-lg w-full p-3 resize-none"
        rows={10}
        name="post-text"
        id="post-text"
        placeholder="What's up in the neighborhood? (min. 30 characters)"
        maxLength={2000}
        value={postText}
        onChange={(e) => {
          const inp = e.target as HTMLTextAreaElement;
          setPostText(inp.value);
        }}
      />
      <input
        className="rounded-lg w-full p-3"
        type="text"
        placeholder="Add tags (press enter after each tag)"
        onKeyDown={(e) => {
          const inp = e.target as HTMLInputElement;
          if (e.key === "Enter") {
            setTags([...tags, inp.value.toLowerCase().trim()]);
            inp.value = "";
          }
        }}
      />
      <div className="flex gap-2 flex-wrap">
        {tags.length ? (
          tags.map((tag, i) => (
            <div
              key={tag + i}
              onClick={() => {
                const temp = [...tags];
                temp.splice(i, 1);
                setTags(temp);
              }}
              className="cursor-pointer"
            >
              <Tag removeable>{tag}</Tag>
            </div>
          ))
        ) : (
          <span className="text-sm text-gray-400 ml-3">Add atleast one tag</span>
        )}
      </div>
      <Button
        primary
        disabled={!(postText.length > 30 && tags.length > 0)}
        isLoading={loading}
        onClick={async () => {
          setLoading(true);
          const post = {
            postText,
            tags,
          };
          // console.log(JSON.stringify(post));
          await createPost(post);
          setLoading(false);
          router.push("/home");
        }}
      >
        Post
      </Button>
    </>
  );
}
