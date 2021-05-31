import React from "react";

export interface BlockComponentProps {
  index: number;
  data: any;
  type: string;
}

export interface Block<Props extends BlockComponentProps = BlockComponentProps> {
  component: React.FC<Props>;

  /**
   * Type should be similar to the name of the Block
   * eg: "header" for a Header component
   */
  type: string;

  /**
   * Icon (SVG) which will be used in the menu for creating a block of this instance
   */
  icon: React.FC;

  defaultValue: any;
}
