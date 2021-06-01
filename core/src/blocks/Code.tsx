import React from 'react'
import { CodeComponent } from "components/Code/Code.component";
import { Block } from "types/block.types";

const CodeIcon: React.FC = () => (
    <span><strong>{`<>`}</strong></span>
)

export const Code: Block = {
    component: CodeComponent,
    type: "code",
    icon: CodeIcon,
    defaultValue: "",
}

