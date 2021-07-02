import MobileHome from "../layouts/MobileHome";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Tag from "../Tag";
import { TrendingUpIcon, SupportIcon } from "@heroicons/react/outline";

export default function SearchPage() {
  return (
    <MobileHome search>
      <Input placeholder="Enter Tags (Press enter after each tag)" />
      <Button full primary>
        Search
      </Button>
      <div className="flex items-center mt-5 gap-2">
        <TrendingUpIcon className="w-5" />
        <h1 className="font-bold">Trending Today</h1>
      </div>
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Tag>garbage problem</Tag>
        </li>
        <li>
          <Tag>food event</Tag>
        </li>
        <li>
          <Tag>elections</Tag>
        </li>
        <li>
          <Tag>diwali</Tag>
        </li>
        <li>
          <Tag>annual day</Tag>
        </li>
      </ol>
      <div className="flex items-center mt-5 gap-2">
        <SupportIcon className="w-5" />
        <h1 className="font-bold">Special Tags</h1>
      </div>
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Tag>urgent</Tag>
        </li>
        <li>
          <Tag>emergency</Tag>
        </li>
      </ol>
    </MobileHome>
  );
}
