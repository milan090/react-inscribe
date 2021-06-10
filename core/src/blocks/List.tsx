import React from 'react'

import { ListComponent } from "components/List/List.component";
import { Block } from "types/block.types";

const OrderedListIcon: React.FC = () => (
  <svg
  width={19}
  height={14}
  viewBox="0 0 19 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity={0.7}
    d="M7.195 1.463h10M7.195 7.213h10M7.195 12.963h10"
    stroke="#272727"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3.517.012H1.903L.127 1.116v1.505l1.61-.984h.043v5.577h1.737V.012z"
    fill="#272727"
  />
</svg>
)

const UnorderedListIcon: React.FC = () => (
  <svg
  width={19}
  height={16}
  viewBox="0 0 19 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity={0.7}
    d="M7.214 2.512h10M7.214 8.262h10M7.214 14.012h10"
    stroke="#272727"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M.109 2.992c0-1.145.929-2.074 2.074-2.074h.008a2.074 2.074 0 110 4.149h-.008A2.074 2.074 0 01.11 2.992z"
    fill="#272727"
  />
</svg>
)

export type ListTypes = "unorderedList" | "orderedList";

export const OrderedList: Block = {
  component: ListComponent,
  type: "orderedList",
  icon: OrderedListIcon,
  defaultValue: [""],
  label: "Ordered List"
}

export const UnorderedList: Block = {
  component: ListComponent,
  type: "unorderedList",
  icon: UnorderedListIcon,
  defaultValue: [""],
  label: "Unordered List"
}
