import React from 'react'
import { TextComponent } from "components/Text/Text.component";
import { Block } from "types/block.types";

const TextIcon: React.FC = () => (
  <span><strong>T</strong></span>
)

export const TextBlock: Block = {
  component: TextComponent,
  type: "text",
  icon: TextIcon,
  defaultValue: "",
}

