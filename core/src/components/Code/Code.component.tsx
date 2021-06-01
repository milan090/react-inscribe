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

    /*const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): boolean | void => {
        if (e.key === "Enter") {
            console.log("Enter")
            e.preventDefault();
            document.execCommand("insertHTML", false, "<br/><br/>");
            return false;
        }
    }*/

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
