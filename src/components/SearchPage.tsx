import MobileHome from "./layouts/MobileHome";
import Input from "../components/Input";

export default function SearchPage() {
  return (
    <MobileHome search>
      <Input placeholder="Enter tags (Eg. politics, events etc..)" />
    </MobileHome>
  );
}
