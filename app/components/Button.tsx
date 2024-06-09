import { classNames } from "@/lib/helpers";

interface ButtonProps {
  label: string;
  onClick: () => void;
  extraClasses?: string;
  isDisabled?: boolean;
}

export default function Button({
  label,
  onClick,
  extraClasses,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        `rounded-[28px] border border-black bg-[#C9DEF7] font-semibold`,
        extraClasses || "",
        isDisabled ? "cursor-not-allowed opacity-30" : "",
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}
