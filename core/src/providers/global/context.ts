import React, { useContext } from "react";
import { Selected } from "types/common.types";
import { OutputData } from "types/data.types";

interface InitialState {
  data: OutputData;
  setData: React.Dispatch<React.SetStateAction<OutputData>>;
  setBlockData: <Value extends unknown = any>(index: number, newValue: Value) => void;
  insertBlock: (type: string, value: any, index?: number) => void;
  selected: Selected;
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
  newBlockIndex: number | null;
  setNewBlockIndex: (index: number | null) => void;
  modifiers: {
    bold: {
      isBoldOn: boolean;
      setIsBoldOn: React.Dispatch<React.SetStateAction<boolean>>;
    };
    italic: {
      isItalicOn: boolean;
      setIsItalicOn:  React.Dispatch<React.SetStateAction<boolean>>;
    };
    underline: {
      isUnderlineOn: boolean;
      setIsUnderlineOn:  React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
}

const initialState: InitialState = {
  data: { blocks: [] },
  setData: () => {},
  setBlockData: () => {},
  insertBlock: () => {},
  newBlockIndex: null,
  selected: { type: "", text: "", index: -1 },
  setSelected: () => {},
  setNewBlockIndex: () => {},
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
