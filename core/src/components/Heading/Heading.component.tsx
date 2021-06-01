// import { useRefCallback } from "hooks/useRefCallback";
import { HeadingTypes } from "blocks/Heading";
import { useData } from "index";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { BlockComponentProps } from "types/block.types";

interface HeadingProps extends BlockComponentProps {
  data: string;
  type: HeadingTypes;
}

export const HeadingComponent: React.FC<HeadingProps> = ({ index, data, type }) => {
  const { setBlockData } = useData();

  const handleChange = (e: ContentEditableEvent) => {
    setBlockData<string>(index, e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): boolean | void => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.execCommand("insertHTML", false, "<br/><br/>");
      return false;
    }
  };

  return (
    <ContentEditable
      html={data}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      tagName={type === "heading1" ? "h1" : type === "heading2" ? "h2" : "h3"}
    />
  );
};
