import React from 'react'

import { ListComponent } from "components/List/List.component";
import { Block } from "types/block.types";

const ListIcon: React.FC = () => (
  <span><strong>L</strong></span>
)

export type ListTypes = "unorderedList" | "orderedList";

export const OrderedListBlock: Block = {
  component: ListComponent,
  type: "orderedList",
  icon: ListIcon,
  defaultValue: [""],
}

export const UnorderedListBlock: Block = {
  component: ListComponent,
  type: "unorderedList",
  icon: ListIcon,
  defaultValue: [""],
}
