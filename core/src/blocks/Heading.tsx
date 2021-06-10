import React from 'react'

import { HeadingComponent } from "components/Heading/Heading.component";
import { Block } from "types/block.types";

const HeadingOneIcon: React.FC = () => (
  <svg
  width={17}
  height={14}
  viewBox="0 0 17 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.063.918v5.799m0 5.798V6.717m0 0h8.764m0 0V.918m0 5.799v5.798"
    stroke="#272727"
    strokeWidth={1.8}
    strokeLinecap="round"
  />
  <path
    d="M14.128 7.821l2.132-1.104v6.201"
    stroke="#272727"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)

const HeadingTwoIcon: React.FC = () => (
  <svg
  width={19}
  height={14}
  viewBox="0 0 19 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.667.918v5.799m0 5.798V6.717m0 0h8.764m0 0V.918m0 5.799v5.798"
    stroke="#272727"
    strokeWidth={1.8}
    strokeLinecap="round"
  />
  <path
    d="M13.811 8.213c0-.78.97-1.496 2.018-1.496 1.049 0 2.3 1.22 1.585 2.571-.715 1.351-3.361 3.63-3.361 3.63h3.603"
    stroke="#272727"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)

const HeadingThreeIcon: React.FC = () => (
  <svg
  width={17}
  height={14}
  viewBox="0 0 17 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.46.918v5.718m0 5.718V6.636m0 0h7.627m0 0V.918m0 5.718v5.718"
    stroke="#272727"
    strokeWidth={1.8}
    strokeLinecap="round"
  />
  <path
    d="M12.637 7.723c0-.522.622-1.253 1.52-1.253.9 0 1.475.626 1.475 1.462 0 .835-.437 1.644-1.612 1.644.599.044 1.842.522 1.842 1.645 0 .966-.599 1.697-1.704 1.697-1.267 0-1.751-1.097-1.751-1.436"
    stroke="#272727"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)

export type HeadingTypes = "heading1" | "heading2" | "heading3";

export const HeadingOne: Block<HeadingTypes> = {
  component: HeadingComponent,
  type: "heading1",
  icon: HeadingOneIcon,
  defaultValue: "",
  label: "Heading 1"
}

export const HeadingTwo: Block<HeadingTypes> = {
  component: HeadingComponent,
  type: "heading2",
  icon: HeadingTwoIcon,
  defaultValue: "",
  label: "Heading 2"
}

export const HeadingThree: Block<HeadingTypes> = {
  component: HeadingComponent,
  type: "heading3",
  icon: HeadingThreeIcon,
  defaultValue: "",
  label: "Heading 3"
}
