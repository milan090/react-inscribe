import React, { useContext } from "react";
import { OutputData } from "types/data.types";

interface InitialState {
  data: OutputData;
  setData: React.Dispatch<React.SetStateAction<OutputData>>;
  setBlockData: <Value extends unknown = any>(index: number, newValue: Value) => void;
  insertBlock: (type: string, value: any, index?: number) => void;
  newBlockIndex: number | null;
  setNewBlockIndex: (index: number | null) => void;
  modifiers: {
    bold: {
      isBoldOn: boolean;
      setIsBoldOn: (isBoldOn: boolean) => void;
    },
    italic: {
      isItalicOn: boolean;
      setIsItalicOn: (isItalicOn: boolean) => void;
    },
    underline: {
      isUnderlineOn: boolean;
      setIsUnderlineOn: (isUnderlineOn: boolean) => void;
    },
  };
}

const initialState: InitialState = {
  data: { blocks: [] },
  setData: () => { },
  setBlockData: () => { },
  insertBlock: () => { },
  newBlockIndex: null,
  setNewBlockIndex: () => { },
  modifiers: {
    bold: {
      isBoldOn: false,
      setIsBoldOn: () => { },
    },
    italic: {
      isItalicOn: false,
      setIsItalicOn: () => { },
    },
    underline: {
      isUnderlineOn: false,
      setIsUnderlineOn: () => { },
    },
  },
};

export const GlobalContext = React.createContext<InitialState>(initialState);

export const useGlobalContext = () => useContext(GlobalContext);
