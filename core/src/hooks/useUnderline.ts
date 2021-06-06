import { useGlobalContext } from "providers/global/context";

export const useUnderline = () => {
  const {
    modifiers: {
      underline: {isUnderlineOn, setIsUnderlineOn}
    },
  } = useGlobalContext();

  return {isUnderlineOn, setIsUnderlineOn};
};
