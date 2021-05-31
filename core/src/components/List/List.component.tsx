// import { useRefCallback } from "hooks/useRefCallback";
import { ListTypes } from "blocks/List";
import { useData } from "index";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { BlockComponentProps } from "types/block.types";
// import { useBold } from "../..";
import { setCaretToElement } from "../../utils/setCaret";

interface ListProps extends BlockComponentProps  {
  data: string[];
  type: ListTypes
};

export const ListComponent: React.FC<ListProps> = ({ index, data, type }) => {
  const { setBlockData } = useData();
  const listRef = useRef<HTMLUListElement | null>(null);
  const [newListElementIndex] = useState<number>();

  const listHtml = data.map((value) => `<li>${value}</li>`).join("");

  const handleChange = (_e: ContentEditableEvent) => {
    const newList: string[] = [];
    listRef.current?.childNodes.forEach((li: HTMLElement) => {
      if (li.tagName?.toLowerCase() === "li") {
        // Remove unicode characters
        const value = li.innerHTML;
        newList.push(value);
      }
    });
    setBlockData<string[]>(index, newList);
  };

  useEffect(() => {
    if (newListElementIndex) {
      const newListElement = listRef.current?.childNodes[newListElementIndex];
      setCaretToElement(newListElement as HTMLElement);
    }
  }, [newListElementIndex]);

  return (
    <ContentEditable
      html={listHtml}
      onChange={handleChange}
      tagName={ type === "orderedList" ? "ol" : "ul" }
      innerRef={listRef}
      // onKeyDown={handleKeyDown}
    />
  );
};
