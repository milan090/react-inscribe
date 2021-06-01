export interface OutputData {
  blocks: BlockData[]
}

export type DefaultTools = "text" | "orderList" | "unorderedList" | "heading1" | "heading2" | "heading3";

export interface BlockData<Type extends string = DefaultTools | string, Value extends object = any> {
  type: Type;
  value: Value;
  id: string;
}