import React, { useContext } from "react";
import { OutputData } from "types/data.types";

interface InitialState {
  data: OutputData;
  setData: (data: OutputData) => void;
  setBlockData: <Value extends unknown = any>(index: number, newValue: Value) => void;
  insertBlock: (type: string, value: any, index?: number) => void;
  newBlockIndex: number | null;
  setNewBlockIndex: (index: number | null) => void;
  modifiers: {
    bold: {
      isBoldOn: boolean;
      setIsBoldOn: (isBoldOn: boolean) => void;
    };
  };
}

const initialState: InitialState = {
  data: { blocks: [] },
  setData: () => {},
  setBlockData: () => {},
  insertBlock: () => {},
  newBlockIndex: null,
  setNewBlockIndex: () => {},
  modifiers: {
    bold: {
      isBoldOn: false,
      setIsBoldOn: () => {},
    },
  },
};

export const GlobalContext = React.createContext<InitialState>(initialState);

export const useGlobalContext = () => useContext(GlobalContext);
