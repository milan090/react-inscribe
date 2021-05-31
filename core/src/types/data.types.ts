export interface OutputData {
  blocks: BlockData[]
}

export type DefaultTools = "paragraph" | "list";

export interface BlockData<Type extends string = DefaultTools | string, Value extends object = any> {
  type: Type;
  value: Value;
}