import React, { useEffect, useState } from "react";
import { OutputData } from "types/data.types";
import { GlobalContext } from "./context";
import { BlockData } from "types/data.types";
import cuid from "cuid";

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<OutputData>({ blocks: [] });
  const [isBoldOn, setIsBoldOn] = useState(false);
  const [newBlockIndex, setNewBlockIndex] = useState<number | null>(null);

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
  }, [isBoldOn]);

  useEffect(() => {
    const handleKeyboardShortcuts = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        switch (event.key) {
          case "b":
            event.stopPropagation();
            event.preventDefault();

            setIsBoldOn((isBoldOn) => !isBoldOn);
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
        modifiers: {
          bold: {
            isBoldOn,
            setIsBoldOn,
          },
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
