import React from 'react'

import { ListComponent } from "components/List/List.component";
import { Block } from "types/block.types";

const OrderedListIcon: React.FC = () => (
  <span><strong>OL</strong></span>
)

const UnorderedListIcon: React.FC = () => (
  <span><strong>UL</strong></span>
)

export type ListTypes = "unorderedList" | "orderedList";

export const OrderedList: Block = {
  component: ListComponent,
  type: "orderedList",
  icon: OrderedListIcon,
  defaultValue: [""],
}

export const UnorderedList: Block = {
  component: ListComponent,
  type: "unorderedList",
  icon: UnorderedListIcon,
  defaultValue: [""],
}
