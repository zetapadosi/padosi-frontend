import classnames from "classnames";
import { MouseEventHandler } from "react";

export default function Button(props: Props) {
  const { primary, pill, children, full, styles, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={classnames(
        "text-primary font-medium rounded-md focus:outline-none p-3",
        {
          "bg-primary text-white": primary,
          "bg-white dark:bg-primary-dark dark:text-white": !primary,
          "rounded-full": pill,
          "w-full": full,
        },
        styles
      )}
    >
      {children}
    </button>
  );
}

interface Props {
  primary?: boolean;
  pill?: boolean;
  full?: boolean;
  styles?: string;
  onClick?: MouseEventHandler;
  children?: unknown;
}
