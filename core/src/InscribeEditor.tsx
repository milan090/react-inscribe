import React, { useEffect, useMemo, useRef } from "react";
import { useData } from "index";
import { InscribeEditorOptions } from "types/options.types";
import { OutputData } from "types/data.types";
import useDeepCompareEffect from "use-deep-compare-effect";
import { Block } from "types/block.types";
import { useGlobalContext } from "providers/global/context";
import { setCaretToElement } from "utils/setCaret";
import styles from "./styles.module.scss";
import { BlockContainer } from "components/BlockContainer/BlockContainer.component";
import { DragDropContext, DragStart, Droppable, DropResult } from "react-beautiful-dnd";
import composeRefs from "@seznam/compose-react-refs";

interface Props {
  handleChange?: (data: OutputData) => void;
  options: InscribeEditorOptions;
  data?: OutputData;
}

export const InscribeEditor: React.FC<Props> = ({
  handleChange,
  options,
  data: defaultData = { blocks: [] },
}) => {
  const { data, setData } = useData();
  const { setNewBlockIndex, newBlockIndex } = useGlobalContext();
  const editorRef = useRef<HTMLDivElement | null>(null);

  // Convert the Blocks Array into a Map
  const Blocks = useMemo<{ [type: string]: Block }>(() => {
    const blocks: { [type: string]: Block } = {};
    options.blocks.forEach((block) => {
      blocks[block.type] = block;
    });

    return blocks;
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination?.index;

    const blockContainer = editorRef.current?.childNodes[sourceIndex];

    if (blockContainer && blockContainer instanceof HTMLElement) {
      blockContainer.classList.remove(styles.shadow);
    }

    if (typeof destinationIndex === "number") {
      // Redorded the elements in state
      setData((data) => {
        const newBlocks = [...data.blocks];

        const [reorderedItem] = newBlocks.splice(sourceIndex, 1);
        newBlocks.splice(destinationIndex, 0, reorderedItem);

        return { ...data, blocks: newBlocks };
      });
    }
  };

  const handleOnDragStart = (initial: DragStart) => {
    const blockContainer = editorRef.current?.childNodes[initial.source.index];

    if (blockContainer && blockContainer instanceof HTMLElement) {
      blockContainer.classList.add(styles.shadow);
    }
  };

  useDeepCompareEffect(() => {
    if (defaultData) setData(defaultData);
  }, [defaultData]);

  useDeepCompareEffect(() => {
    if (handleChange) handleChange(data);
  }, [data]);

  useEffect(() => {
    if (newBlockIndex) {
      const element = editorRef.current?.childNodes[newBlockIndex].childNodes[1];

      if (element && element instanceof HTMLElement) {
        setCaretToElement(element);
      }
    }
    setNewBlockIndex(null);
  }, [newBlockIndex]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
      <Droppable droppableId="blocks">
        {(provided) => {
          return (
            <div
              ref={composeRefs<HTMLDivElement>(editorRef, provided.innerRef)}
              {...provided.droppableProps}
              className={styles.editor}
            >
              {data.blocks.map(({ type, value, id }, i) => {
                const BlockComponent = Blocks[type]?.component;

                if (!BlockComponent)
                  throw new Error(
                    "Invalid Block type. Your data might have broken due to an update or something else"
                  );

                return (
                  <BlockContainer key={id} id={id} index={i}>
                    <BlockComponent index={i} data={value} type={type} />
                  </BlockContainer>
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
