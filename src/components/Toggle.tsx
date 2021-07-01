import classnames from "classnames";

export default function Toggle(props: Props) {
  const { onClick = () => {}, enabled = false } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className={classnames(
        "bg-primary relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none",
        {
          _p_toggle_enabled: enabled,
          _p_toggle: !enabled,
        }
      )}
      aria-pressed={enabled}
    >
      <span
        aria-hidden="true"
        className={classnames(
          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
          {
            _p_toggle_circle_enabled: enabled,
            _p_toggle_circle: !enabled,
            "translate-x-0": !enabled,
            "translate-x-full": enabled,
          }
        )}
      ></span>
    </button>
  );
}

interface Props {
  children?: unknown;
  className?: string;
  enabled?: boolean;
  onClick?: () => void;
}
