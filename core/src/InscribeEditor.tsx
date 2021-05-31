import React, { useEffect, useMemo, useRef } from "react";
import { useData } from "index";
import { InscribeEditorOptions } from "types/options.types";
import { OutputData } from "types/data.types";
import useDeepCompareEffect from "use-deep-compare-effect";
import { Block } from "types/block.types";
import { useGlobalContext } from "providers/global/context";
import { setCaretToElement } from "utils/setCaret";

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
  const ref = useRef<HTMLDivElement | null>(null);

  // Convert the Blocks Array into a Map
  const Blocks = useMemo<{ [type: string]: Block }>(() => {
    const blocks: { [type: string]: Block } = {};
    options.blocks.forEach((block) => {
      blocks[block.type] = block;
    });

    return blocks;
  }, []);

  useDeepCompareEffect(() => {
    if (defaultData) setData(defaultData);
  }, [defaultData]);

  useDeepCompareEffect(() => {
    if (handleChange) handleChange(data);
  }, [data]);

  useEffect(() => {
    if (newBlockIndex) {
      const element = ref.current?.childNodes[newBlockIndex];

      if (element && element instanceof HTMLElement) {
        setCaretToElement(element);
      }
    }
    setNewBlockIndex(null);
  }, [newBlockIndex]);

  return (
    <div ref={ref}>
      {data.blocks.map(({ type, value }, i) => {
        const BlockComponent = Blocks[type]?.component;

        if (!BlockComponent)
          throw new Error(
            "Invalid Block type. Your data might have broken due to an update or something else"
          );

        return <BlockComponent index={i} data={value} key={i} type={type} />;
      })}
    </div>
  );
};
