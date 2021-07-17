import { useRouter } from "next/router";
import { useState } from "react";
import { updateBio } from "../../api/user";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeBio } from "../../redux/userSlice";
import Button from "../Button";
import MobileHome from "../layouts/MobileHome";

export default function EditBioPage() {
  const [loading, setLoading] = useState(false);
  const [bioText, setBioText] = useState("");
  const router = useRouter();
  const userId = useAppSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();
  return (
    <MobileHome>
      <textarea
        className="rounded-lg w-full p-3 resize-none"
        rows={10}
        name="bio-text"
        id="bio-text"
        placeholder="Say something about yourself. (min. 30 characters)"
        maxLength={2000}
        value={bioText}
        onChange={(e) => {
          const inp = e.target as HTMLTextAreaElement;
          setBioText(inp.value);
        }}
      />

      <Button
        primary
        disabled={bioText.length < 30}
        isLoading={loading}
        onClick={async () => {
          setLoading(true);
          const bio = {
            bioText,
          };
          await updateBio(bio);
          dispatch(changeBio(bioText));
          setLoading(false);
          router.push(`/profile/${userId}`);
        }}
      >
        Update Bio
      </Button>
    </MobileHome>
  );
}
