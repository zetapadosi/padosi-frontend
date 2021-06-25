import classnames from "classnames";
import Link from "next/link";

export default function TextLogo({ lg, xl }: Props) {
  return (
    <Link href="/">
      <a
        className={classnames("font-acme text-primary text-xl", {
          [`text-5xl`]: xl,
          [`text-3xl`]: lg,
        })}
      >
        Padosi
      </a>
    </Link>
  );
}

interface Props {
  lg?: boolean;
  xl?: boolean;
}
