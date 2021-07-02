import classnames from "classnames";

export default function Tag({ children }) {
  return (
    <span
      className={classnames("px-2 py-0.5 text-sm lowercase font-semibold text-white rounded", {
        ["bg-yellow-500 text-black"]: children.toLowerCase() === "urgent",
        ["bg-red-500"]: children.toLowerCase() === "emergency",
        ["bg-primary"]: !["emergency", "urgent"].includes(children.toLowerCase()),
      })}
    >
      {children}
    </span>
  );
}
