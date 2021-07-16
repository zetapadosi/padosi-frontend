import { useRouter } from "next/router";
import { useState } from "react";
import { useCreatePostMutation } from "../api/padosiApi";
import { createPost } from "../api/post";
import { useAppSelector } from "../hooks/useRedux";
import Button from "./Button";
import Tag from "./Tag";

export default function NewPost() {
  const [tags, setTags] = useState([]);
  const [postText, setPostText] = useState("");
  const router = useRouter();
  return (
    <>
      <textarea
        className="rounded-lg w-full p-3 resize-none"
        rows={10}
        name="post-text"
        id="post-text"
        placeholder="What's on your mind?"
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
            setTags([...tags, inp.value]);
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
            >
              <Tag removeable>{tag}</Tag>
            </div>
          ))
        ) : (
          <span className="text-sm text-gray-400">Add atleast one tag</span>
        )}
      </div>
      <Button
        primary
        onClick={() => {
          const post = {
            postText,
            tags,
          };

          console.log(JSON.stringify(post));

          const main = async () => {
            await createPost(post);
            router.push("/home");
          };
          main();
        }}
      >
        Post
      </Button>
    </>
  );
}
