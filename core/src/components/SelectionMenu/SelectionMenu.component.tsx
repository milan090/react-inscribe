/**
 * The commented out stuff here are part of this issue: (yet to make the issue)
 */

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "providers/global/context";

import { Bold } from "components/icons/Bold.icon";
import { Italic } from "components/icons/Italic.icon";
import { Link } from "components/icons/Link.icon";
import { Underline } from "components/icons/Underline.icon";
// import { TextIcon } from "blocks/Text";
import { OutsideClick } from "components/OutsideClick.component";

import styles from "./SelectionMenu.module.scss";
// import { ArrowDown } from "../icons/ArrowDown.icon";
// import { Block } from "types/block.types";
import { ThreeDots } from "components/icons/ThreeDots.icon";

const UNSUPPORTED_BLOCK_TYPES = ["code"];

type Props = {
  // blocks: Block[];
};

export const SelectionMenu: React.FC<Props> = () => {
  const { selected } = useGlobalContext();
  // const [isConvertMenuOpen, setIsConvertMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, height: 0, width: 0 });

  // const handleConvertSelected = (type: string) => {
  //   const selection = window.getSelection();

  //   if (!selection?.rangeCount) return;

  //   const range = selection?.getRangeAt(0);
  //   range.deleteContents();

  //   setSelected((selected) => ({ ...selected, text: "" }));

  //   const block = blocks.find((e) => e.type === type);

  //   if (!block) throw new Error("Invalid block type selected. Could not find in list of blocks");

  //   if (Array.isArray(block.defaultValue)) {
  //     insertBlock(type, [selected.text], selected.index + 1);
  //   } else {
  //     insertBlock(type, selected.text, selected.index + 1);
  //   }
  // };

  useEffect(() => {
    console.log("Selected", selected);
    if (selected.text && !UNSUPPORTED_BLOCK_TYPES.includes(selected.type)) {
      const selection = window.getSelection();

      if (selection) {
        const range = selection.getRangeAt(0);
        const rects = range.getClientRects();
        const rect = rects[rects.length - 1];
        const { x, y, height, width } = rect;

        setPosition({ top: height + y, left: x + width - 10, height, width });
      }
    }
  }, [selected?.text, selected?.type]);

  if (!selected?.text || selected.type === "code") return null;

  const { top, left } = position;
  // const Icon = blocks.find((e) => e.type === selected.type)?.icon;

  return (
    <div className={styles.menu} style={{ top: `${top}px`, left: `${left}px` }}>
      {/* Convert to a Diff type of block Dropdown */}

      {/* <OutsideClick onOutsideClick={() => setIsConvertMenuOpen(false)}>
        <button
          className={styles.convert}
          onClick={() => setIsConvertMenuOpen((isOpen) => !isOpen)}
        >
          {Icon ? <Icon /> : <TextIcon />}
          <ArrowDown />
        </button>
        <div
          className={styles.convertOptions}
          style={{ display: isConvertMenuOpen ? "flex" : "none" }}
        >
          {blocks.map(({ icon: BlockIcon, label, type }, i) => {
            return (
              <button
                key={i}
                className={styles.convertOption}
                onClick={() => handleConvertSelected(type)}
              >
                <span className={styles.convertIcon}>
                  <BlockIcon />
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </OutsideClick>

      <span className={styles.verticalSeperator} /> */}

      <button onClick={() => document.execCommand("bold")}>
        <Bold />
      </button>
      <button onClick={() => document.execCommand("italic")}>
        <Italic />
      </button>
      <button onClick={() => document.execCommand("underline")}>
        <Underline />
      </button>
      
      {/* Yet to be implemented */}
      {/* <button>
        <Link />
      </button> */}

      <OutsideClick onOutsideClick={() => setIsMoreMenuOpen(false)}>
        <button onClick={() => setIsMoreMenuOpen((isOpen) => !isOpen)}>
          <ThreeDots />
        </button>
        <div className={styles.moreMenu} style={{ display: isMoreMenuOpen ? "flex" : "none" }}>
          <button onClick={() => document.execCommand("cut")}>Cut</button>
          <button onClick={() => document.execCommand("copy")}>Copy</button>
          {/* <button  onClick={() => document.execCommand("paste")}>Paste</button> */}
        </div>
      </OutsideClick>
    </div>
  );
};
