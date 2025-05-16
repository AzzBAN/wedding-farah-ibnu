import { CSSProperties } from "react";

export interface LogoProps {
  size?: number | string;
  height?: number | string;
  width?: number | string;
  color?: string;
  viewbox?: string;
  className?: string;
  style?: CSSProperties;
  borderColor?: string;
  borderPadding?: number;
}

export interface svgProps {
  size?: number | string;
  height?: number | string;
  width?: number | string;
  color?: string;
  viewbox?: string;
  className?: string;
  style?: CSSProperties;
}
