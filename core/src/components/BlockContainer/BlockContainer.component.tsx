import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./BlockContainer.module.scss";

type Props = {
  children: React.ReactNode;
  id: string;
  index: number;
};

const DraggableIcon: React.FC = (props) => {
  return (
    <svg
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.5} fill="#333">
        <path d="M1.934 8.04a1 1 0 100-2 1 1 0 000 2zM7.934 8.04a1 1 0 100-2 1 1 0 000 2zM1.934 2.04a1 1 0 100-2 1 1 0 000 2zM7.934 2.04a1 1 0 100-2 1 1 0 000 2z" />
      </g>
    </svg>
  );
};

export const BlockContainer: React.FC<Props> = ({ children, id, index }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.blockContainer}
        >
          <span className={styles.draggable}>
            <DraggableIcon />
          </span>
          {children}
        </div>
      )}
    </Draggable>
  );
};
