import React from "react";

import {
  useBold,
  InscribeEditor,
  UnorderedList,
  OrderedList,
  OutputData,
  ToolBox,
  Text,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
} from "react-inscribe";
import "react-inscribe/dist/index.css";

const blocks = [Text, HeadingOne, HeadingTwo, HeadingThree, UnorderedList, OrderedList];

const App: React.FC = () => {
  const { isBoldOn, setIsBoldOn } = useBold();

  const handleChange = (data: OutputData) => {
    console.log(data);
  };

  return (
    <div>
      <ToolBox blocks={blocks} />
      <InscribeEditor
        options={{ blocks }}
        data={{
          blocks: [
            {
              type: "unorderedList",
              value: ["hello"],
            },
          ],
        }}
        handleChange={handleChange}
      />
      <button
        onClick={() => {
          setIsBoldOn(!isBoldOn);
        }}
        style={{
          border: "none",
          color: isBoldOn ? "black" : "gray",
        }}
      >
        B
      </button>
    </div>
  );
};

export default App;
