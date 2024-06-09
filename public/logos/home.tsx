interface HomeProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default function Home({
  width = "12px",
  height = "12px",
  fill = "#000000",
}: HomeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="m12 1.198l10 8.334V22H2V9.532l10-8.334ZM10 20h4v-5h-4v5Zm6 0h4v-9.532l-8-6.666l-8 6.666V20h4v-7h8v7Z"
      ></path>
    </svg>
  );
}
