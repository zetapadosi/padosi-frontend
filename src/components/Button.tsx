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
          "bg-primary text-white": primary && !disabled,
          "bg-white dark:bg-primary-dark dark:text-white": !primary,
          "rounded-full": pill,
          "w-full": full,
          "bg-primary-light cursor-not-allowed text-white": disabled,
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
