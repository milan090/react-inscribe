import {  useGlobalContext } from "providers/global/context";

export const useData = () => {
  const { data, setData, setBlockData } = useGlobalContext();

  return { data, setData, setBlockData };
};
