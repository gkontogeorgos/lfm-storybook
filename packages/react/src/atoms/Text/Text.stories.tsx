import React from "react";
import Text from "./Text";
import { select } from "@storybook/addon-knobs";
import { FontSize, FontWeight, FontStyle } from "@ds.e/foundation";

// css
import "@ds.e/scss/lib/Utilities.css";

export default {
  title: "Design System/Atoms/Text",
};

const title = "My Text";

export const CommonText = () => (
  <Text
    size={select("size", FontSize, FontSize.xs)}
    fontStyle={select("fontStyle", FontStyle, FontStyle.normal)}
    fontWeight={select("fontWeight", FontWeight, FontWeight.normal)}
  >
    {title}
  </Text>
);
