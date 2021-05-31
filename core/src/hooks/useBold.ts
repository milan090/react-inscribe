import { useGlobalContext } from "providers/global/context";

export const useBold = () => {
  const {
    modifiers: {
      bold: { isBoldOn, setIsBoldOn },
    },
  } = useGlobalContext();

  return { isBoldOn, setIsBoldOn };
};
