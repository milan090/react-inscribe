import React from "react";
import { TextComponent } from "components/Text/Text.component";
import { Block } from "types/block.types";

export const TextIcon: React.FC = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.161 3.168V.918h12v2.25M4.912 12.918h4.5M7.161.918v12"
      stroke="#272727"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Text: Block = {
  component: TextComponent,
  type: "text",
  icon: TextIcon,
  defaultValue: "",
  label: "Text",
};
