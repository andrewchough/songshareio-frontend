interface ArticlesProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default function Articles({
  width = "12px",
  height = "12px",
  fill = "#000000",
}: ArticlesProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        d="M13 0a2 2 0 0 1 2 2H6a2 2 0 0 0-2 2v12a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
      ></path>
      <path
        fill={fill}
        d="M18 5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2zm-7 5H7V5h4zm5-4h-4V5h4zm0 2h-4V7h4zm0 2h-4V9h4zm0 2H7v-1h9zm0 2H7v-1h9zm0 2H7v-1h9z"
      ></path>
    </svg>
  );
}
