import React from "react";
import { FontSize } from "@ds.e/foundation";
import { FontStyle } from "@ds.e/foundation";
import { FontWeight } from "@ds.e/foundation";
import "@ds.e/scss/lib/Text.css";

export interface TextProps {
  size?: keyof typeof FontSize;
  fontStyle?: keyof typeof FontStyle;
  fontWeight?: keyof typeof FontWeight;
}

const Text: React.FC<TextProps> = ({
  size = FontSize.base,
  fontStyle = FontStyle.normal,
  fontWeight = FontWeight.normal,
  children,
}) => {
  const className = `dse-text dse-text-${size} dse-text-style-${fontStyle} dse-text-weight-${fontWeight}`;

  return <p className={className}>{children}</p>;
};

export default Text;
