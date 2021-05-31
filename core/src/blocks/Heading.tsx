import React from 'react'

import { HeadingComponent } from "components/Heading/Heading.component";
import { Block } from "types/block.types";

const HeadingOneIcon: React.FC = () => (
  <span><strong>H1</strong></span>
)

const HeadingTwoIcon: React.FC = () => (
  <span><strong>H2</strong></span>
)

const HeadingThreeIcon: React.FC = () => (
  <span><strong>H3</strong></span>
)

export type HeadingTypes = "heading1" | "heading2" | "heading3";

export const HeadingOne: Block<HeadingTypes> = {
  component: HeadingComponent,
  type: "heading1",
  icon: HeadingOneIcon,
  defaultValue: "",
}

export const HeadingTwo: Block<HeadingTypes> = {
  component: HeadingComponent,
  type: "heading2",
  icon: HeadingTwoIcon,
  defaultValue: "",
}

export const HeadingThree: Block<HeadingTypes> = {
  component: HeadingComponent,
  type: "heading3",
  icon: HeadingThreeIcon,
  defaultValue: "",
}