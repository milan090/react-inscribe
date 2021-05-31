import { ToolBox } from "components/ToolBox";
import { OutputData } from "types/data.types";
import { useBold } from "./hooks/useBold";
import { useData } from "./hooks/useData";
import { InscribeEditor } from "./InscribeEditor";
import { GlobalProvider } from "./providers/global/provider";

export { GlobalProvider as Provider, InscribeEditor, ToolBox };
export {  useData, useBold };
export { OutputData };
export { List, Text } from "blocks";
