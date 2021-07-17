import {
  ChangeEventHandler,
  forwardRef,
  KeyboardEventHandler,
  LegacyRef,
  MouseEventHandler,
} from "react";

const Input = forwardRef((props: Props, ref: LegacyRef<HTMLInputElement>) => {
  const { placeholder, value, onClick, onChange, onKeyPress } = props;
  return (
    <input
      ref={ref}
      className="w-full border-2 p-3 rounded-md"
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
});

export default Input;

interface Props {
  placeholder?: string;
  value?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
