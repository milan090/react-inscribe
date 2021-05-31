import React, { useMemo } from "react";
import { useData } from "index";
import { InscribeEditorOptions } from "types/options.types";
import { OutputData } from "types/data.types";
import useDeepCompareEffect from "use-deep-compare-effect";
import { Block } from "types/block.types";

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

  return (
    <div>
      {data.blocks.map((block, i) => {
        const BlockComponent = Blocks[block.type].component;
        return <BlockComponent index={i} data={block.value} key={i} />;
      })}
    </div>
  );
};
