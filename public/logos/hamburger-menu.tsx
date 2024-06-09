interface HamburgerMenuProps {
  width?: string;
  height?: string;
}

export default function HamburgerMenu({
  width = "12px",
  height = "12px",
}: HamburgerMenuProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L32 2"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M2 11H32" stroke="black" strokeWidth="3" strokeLinecap="round" />
      <path d="M2 21H32" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
