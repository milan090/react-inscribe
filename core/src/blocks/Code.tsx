import React from 'react'
import { CodeComponent } from "components/Code/Code.component";
import { Block } from "types/block.types";

const CodeIcon: React.FC = () => (
    <svg
    width={25}
    height={17}
    viewBox="0 0 25 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.016 1.964l6.533 6.532-6.533 6.532M8.307 15.028L1.774 8.496l6.533-6.532"
      stroke="#272727"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Code: Block = {
    component: CodeComponent,
    type: "code",
    icon: CodeIcon,
    defaultValue: "",
}

