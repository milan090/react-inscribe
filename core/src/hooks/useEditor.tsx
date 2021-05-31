import { useGlobalContext } from "providers/global/context"

export const useEditor = () => {
  const { insertBlock } = useGlobalContext();

  return { insertBlock };
}