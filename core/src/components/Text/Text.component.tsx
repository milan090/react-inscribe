// import { useRefCallback } from "hooks/useRefCallback";
import { useData } from "index";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { BlockComponentProps } from "types/block.types";

interface TextProps extends BlockComponentProps  {
  data: string;
};

export const TextComponent: React.FC<TextProps> = ({ index, data }) => {
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
  }

  return (
    <ContentEditable
      html={data}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      tagName="p"
    />
  );
};
