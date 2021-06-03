import { useEditor } from "hooks/useEditor";
import React from "react";
import { Block } from "types/block.types";
import deepClone from "clone-deep";
import styles from "./ToolBox.module.scss";

type Props = {
  /**
   * Nested blocks like `[[Text, HeadingOne], [List]]` is used to add a seperator line in between these block sections
   * Simple blocks list like `[Text, HeadingOne, List]` wont have any seperator line between them
   */
  blocks: Block[] | Block[][];
  align: "vertical" | "horizontal";
  backgroundColor: string;
};

export const ToolBox: React.FC<Props> = ({
  blocks,
  align = "horizontal",
  backgroundColor = "#F4F4F4",
}) => {
  const { insertBlock } = useEditor();

  const handleInsertBlockButtonClick = (type: string, value: any) => {
    insertBlock(type, deepClone(value));
  };

  if (Array.isArray(blocks[0])) {
    // Nest blocks if blocks first element is an array
    const blocksNested = blocks as Block[][];

    return (
      <div
        className={`${styles.toolbox} ${styles[align]}`}
        style={{ backgroundColor: backgroundColor }}
      >
        {blocksNested.map((blocksList, i) =>
          blocksList.map(({ icon: BlockIcon, type, defaultValue }, j) => {
            // True if not last element of blocksNested and is last element of blocksList
            // This is to not have any lines at the bottom or above
            const shouldHaveBorderAtBottom = i !== blocksNested.length - 1 && j === blocksList.length - 1;

            return (
              <button
                key={i+j}
                onClick={() => handleInsertBlockButtonClick(type, defaultValue)}
                className={shouldHaveBorderAtBottom ? styles.buttonBorder : ""}
              >
                <BlockIcon />
              </button>
            );
          })
        )}
      </div>
    );
  }

  const blocksList = blocks as Block[]; // type assertion

  return (
    <div
      className={`${styles.toolbox} ${styles[align]}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {blocksList.map(({ icon: BlockIcon, type, defaultValue }, i) => {
        return (
          <button key={i} onClick={() => handleInsertBlockButtonClick(type, defaultValue)}>
            <BlockIcon />
          </button>
        );
      })}
    </div>
  );
};
