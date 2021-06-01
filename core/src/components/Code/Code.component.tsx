// import { useRefCallback } from "hooks/useRefCallback";
import { useData } from "index";
import React from "react";
import { BlockComponentProps } from "types/block.types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";

interface CodeProps extends BlockComponentProps {
    data: string;
};

export const CodeComponent: React.FC<CodeProps> = ({ index, data }) => {
    const { setBlockData } = useData();

    const handleChange = (value:any) => {
        setBlockData<string>(index, value);
    };

    return (
      <AceEditor
        mode="typescript"
        theme="monokai"
        onChange={handleChange}
        value={data}
        fontSize={16}
        maxLines={Infinity}
      />
    );
};
