import classnames from "classnames";
import { XIcon } from "@heroicons/react/outline";

export default function Tag({ children, removeable }: Props) {
  return (
    <span
      className={classnames("px-2 py-0.5 text-sm flex lowercase font-semibold text-white rounded", {
        ["bg-yellow-500 text-black"]: children.toLowerCase() === "urgent",
        ["bg-red-500"]: children.toLowerCase() === "emergency",
        ["bg-primary"]: !["emergency", "urgent"].includes(children.toLowerCase()),
      })}
    >
      {children}
      {removeable && <XIcon className="w-4 ml-1" />}
    </span>
  );
}

interface Props {
  children: string | String;
  removeable?: boolean;
}
