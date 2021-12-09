import React from "react";
import Text from "./Text";
import { text, select } from "@storybook/addon-knobs";
import { FontSize } from "@ds.e/foundation";

// css
import "@ds.e/scss/lib/Utilities.css";

export default {
  title: "Atoms | Text",
};

export const CommonText = () => (
  <Text size={select("size", FontSize, FontSize.xs)} >TEST</Text>
);
