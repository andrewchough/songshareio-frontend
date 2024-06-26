interface AccountProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default function Account({
  width = "12px",
  height = "12px",
  fill = "#000000",
}: AccountProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 344 384"
    >
      <path
        fill={fill}
        d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
      ></path>
    </svg>
  );
}
