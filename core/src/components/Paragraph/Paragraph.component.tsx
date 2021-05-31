// import { useRefCallback } from "hooks/useRefCallback";
import { useData } from "index";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { BlockComponentProps } from "types/block.types";

interface ListProps extends BlockComponentProps  {
  data: string;
};

export const ParagraphComponent: React.FC<ListProps> = ({ index, data }) => {
  const { setBlockData } = useData();

  const handleChange = (e: ContentEditableEvent) => {
    setBlockData<string>(index, e.target.value);
  };

  return (
    <ContentEditable
      html={data}
      onChange={handleChange}
      tagName="ul"
    />
  );
};
