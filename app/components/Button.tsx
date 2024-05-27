import { classNames } from "@/lib/helpers";

interface ButtonProps {
  label: string;
  onClick: () => void;
  extraClasses?: string;
}

export default function Button({ label, onClick, extraClasses }: ButtonProps) {
  return (
    <button
      className={classNames(
        `font-semibold rounded-[28px] border border-black bg-[#C9DEF7]`,
        extraClasses || "",
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
