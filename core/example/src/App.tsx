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
  const handleChange = (data: OutputData) => {
    console.log(data);
  };

  return (
    <div className="editor">
      <ToolBox blocks={blocks} />
      <div className="editor-blocks">
        <InscribeEditor
          options={{ blocks }}
          data={{
            blocks: [
              {
                type: "unorderedList",
                value: ["hello"],
                id: "asdsa",
              },
            ],
          }}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
