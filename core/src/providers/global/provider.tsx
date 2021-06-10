import React, { useEffect, useState } from "react";
import { OutputData } from "types/data.types";
import { GlobalContext } from "./context";
import { BlockData } from "types/data.types";
import cuid from "cuid";
import { Selected } from "types/common.types";

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<OutputData>({ blocks: [] });
  const [isBoldOn, setIsBoldOn] = useState(false);
  const [isItalicOn, setIsItalicOn] = useState(false);
  const [isUnderlineOn, setIsUnderlineOn] = useState(false);
  const [newBlockIndex, setNewBlockIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<Selected>({ type: "", text: "", index: -1 })

  const setBlockData = <Value extends unknown = any>(index: number, newValue: Value): void => {
    setData((data) => {
      const newData = { blocks: [...data.blocks] };
      const newBlock: BlockData = { ...data.blocks[index], value: newValue };

      newData.blocks[index] = newBlock;

      return newData;
    });
  };

  const insertBlock = (type: string, value: any, index: number = data.blocks.length): void => {
    setData((data) => {
      const newData = { blocks: [...data.blocks] };
      const newBlock: BlockData = { type, value, id: cuid() };

      newData.blocks.splice(index, 0, newBlock);

      setNewBlockIndex(index);

      return newData;
    });
  };

  useEffect(() => {
    if (isBoldOn) document.execCommand("bold");
    if (isItalicOn) document.execCommand("italic");
    if (isUnderlineOn) document.execCommand("underline");
  }, [isBoldOn, isItalicOn, isUnderlineOn]);

  useEffect(() => {
    const handleKeyboardShortcuts = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        switch (event.key) {
          case "b":
            event.stopPropagation();
            event.preventDefault();

            setIsBoldOn((isBoldOn) => !isBoldOn);
            break;
          
          case "i":
            event.stopPropagation();
            event.preventDefault();

            setIsItalicOn((isItalicOn) => !isItalicOn);
            break;
          
          case "u":
            event.stopPropagation();
            event.preventDefault();

            setIsUnderlineOn((isUnderlineOn) => !isUnderlineOn);
            break;

          default:
            break;
        }
      }
    };
    document.addEventListener("keydown", handleKeyboardShortcuts);

    return () => {
      document.removeEventListener("keydown", handleKeyboardShortcuts);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        setBlockData,
        insertBlock,
        newBlockIndex,
        setNewBlockIndex,
        selected,
        setSelected,
        modifiers: {
          bold: {
            isBoldOn,
            setIsBoldOn,
          }, italic: {
            isItalicOn,
            setIsItalicOn,
          }, underline: { 
            isUnderlineOn,
            setIsUnderlineOn,
          },
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
