import React from 'react'

import { ListComponent } from "components/List/List.component";
import { Block } from "types/block.types";

const ListIcon: React.FC = () => (
  <span><strong>L</strong></span>
)

export const ListBlock: Block = {
  component: ListComponent,
  type: "list",
  icon: ListIcon,
  defaultValue: [""],
}

