import react from "react";
import { useTheme } from "@mui/material";

export default function BarLoader(props) {
  const theme = useTheme();
  return (
    <div className="spinner-container">
      <svg
        width="87"
        height="50"
        viewBox="0 0 87 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="loader_bars">
          <g id="upperbar">
            <rect id="1_2" width="67" height="14" rx="7" fill={theme.palette.secondary.main} />
          </g>
          <g id="middlebar">
            <rect
              id="Rectangle 2"
              x="20"
              y="18"
              width="67"
              height="14"
              rx="7"
              fill={theme.palette.secondary.main}
            />
          </g>
          <g id="bottombar">
            <rect
              id="3_2"
              y="36"
              width="67"
              height="14"
              rx="7"
              fill={theme.palette.secondary.main}
            />
          </g>
        </g>
      </svg>

      <p>{props.customText}</p>
    </div>
  );
}
