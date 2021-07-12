import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Button from "./Button";

export default function NewPostButton({ text }: Props) {
  return (
    <Link href="/new-post">
      {text ? (
        <a className="">
          <Button primary>Create Post</Button>
        </a>
      ) : (
        <a className="rounded-full bg-primary h-11 w-11 p-2 fixed bottom-14 right-6 text-white shadow-sm">
          <PlusIcon className="h-full w-full" />
        </a>
      )}
    </Link>
  );
}

interface Props {
  text?: Boolean;
}
