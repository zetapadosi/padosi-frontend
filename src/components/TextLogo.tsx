import classnames from "classnames";
import Link from "next/link";

export default function TextLogo({ lg, xl }: Props) {
  return (
    <span
      className={classnames("font-acme text-primary text-xl", {
        [`text-5xl`]: xl,
        [`text-3xl`]: lg,
      })}
    >
      Padosi
    </span>
  );
}

interface Props {
  lg?: boolean;
  xl?: boolean;
}
