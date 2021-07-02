import MobileNav from "../MobileNav";

export default function MainPage({ children, home, search, profile }: Props) {
  return (
    <div className="h-full flex flex-col justify-between overflow-y-scroll">
      <div className="container mx-auto max-w-2xl flex-grow p-3 mb-10">{children}</div>
      <MobileNav home={home} search={search} profile={profile} />
    </div>
  );
}

interface Props {
  home?: boolean;
  search?: boolean;
  profile?: boolean;
  children: unknown;
}
