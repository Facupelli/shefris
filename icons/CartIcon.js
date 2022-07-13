export default function CartIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      // fill="#e7e7e7"
    >
      <circle
        cx="176"
        cy="416"
        r="16"
        style={{
          fill: "none",
          stroke: "#e7e7e7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
      <circle
        cx="400"
        cy="416"
        r="16"
        style={{
          fill: "none",
          stroke: "#e7e7e7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
      <polyline
        points="48 80 112 80 160 352 416 352"
        style={{
          fill: "none",
          stroke: "#e7e7e7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
      <path
        d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
        style={{
          fill: "none",
          stroke: "#e7e7e7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
    </svg>
  );
}
