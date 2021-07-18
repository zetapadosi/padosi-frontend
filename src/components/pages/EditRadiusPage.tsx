import { useRouter } from "next/router";
import { useState } from "react";
import { updateBio, updateDistance } from "../../api/user";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeBio } from "../../redux/userSlice";
import Button from "../Button";
import MobileHome from "../layouts/MobileHome";

export default function EditRadiusPage() {
  const [loading, setLoading] = useState(false);
  const [radius, setRadius] = useState("5");
  const router = useRouter();
  const userId = useAppSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();
  return (
    <MobileHome>
      <h3 className="font-bold text-left text-xl py-2 text-primary">Update Radius</h3>
      <span className="font-medium text-lg">{radius} Km</span>
      <input
        onChange={(e) => {
          const inp = e.target as HTMLInputElement;
          setRadius(inp.value);
        }}
        type="range"
        min="1"
        max="10"
        value={radius}
        className=""
      />

      <Button
        primary
        isLoading={loading}
        onClick={async () => {
          setLoading(true);
          await updateDistance({
            distance: +radius,
          });
          setLoading(false);
          router.push(`/home`);
        }}
      >
        Update
      </Button>
    </MobileHome>
  );
}
