import React from 'react'
import { ParagraphComponent } from "components/Paragraph/Paragraph.component";
import { Block } from "types/block.types";

const ParagraphIcon: React.FC = () => (
  <span><strong>P</strong></span>
)

export const ParagraphBlock: Block = {
  component: ParagraphComponent,
  type: "paragraph",
  icon: ParagraphIcon,
  defaultValue: "",
}

