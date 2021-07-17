import classnames from "classnames";
import { MouseEventHandler } from "react";
import Spinner from "./Spinner";

export default function Button(props: Props) {
  const { primary, pill, children, full, styles, onClick, isLoading, disabled } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classnames(
        "text-primary font-medium rounded-md focus:outline-none p-3",
        {
          "bg-primary-light cursor-not-allowed": disabled,
          "bg-primary text-white": primary,
          "bg-white dark:bg-primary-dark dark:text-white": !primary,
          "rounded-full": pill,
          "w-full": full,
        },
        styles
      )}
    >
      {isLoading ? (
        <div className="grid place-items-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

interface Props {
  primary?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  pill?: boolean;
  full?: boolean;
  styles?: string;
  onClick?: MouseEventHandler;
  children?: unknown;
}
