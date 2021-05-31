import { useEditor } from 'hooks/useEditor'
import React from 'react'
import { Block } from 'types/block.types'
import deepClone from "clone-deep";

type Props = {
  blocks: Block[]
}

export const ToolBox: React.FC<Props> = ({ blocks }) => {
  const { insertBlock } = useEditor();

  const handleInsertBlockButtonClick = (type: string, value: any) => {
    insertBlock(type, deepClone(value));
  }

  return (
    <div>
      {
        blocks.map(({ icon: BlockIcon, type, defaultValue }, i) => {
          return <button key={i} onClick={() => handleInsertBlockButtonClick(type, defaultValue)}><BlockIcon /></button>
        })
      }
    </div>
  )
}