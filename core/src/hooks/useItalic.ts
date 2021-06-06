import { useGlobalContext } from "providers/global/context";

export const useItalic = () => {
  const {
    modifiers: {
      italic: {isItalicOn, setIsItalicOn}
    },
  } = useGlobalContext();

  return { isItalicOn, setIsItalicOn };
};
