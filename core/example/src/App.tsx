import React from "react";

import {
  InscribeEditor,
  UnorderedList,
  OrderedList,
  OutputData,
  ToolBox,
  Text,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Code,
} from "react-inscribe";

import "react-inscribe/dist/index.css";

// Nest tools like this to add seperators (border lines) in the toolbox
const toolboxBlocks = [[Text, HeadingOne, HeadingTwo, HeadingThree], [UnorderedList, OrderedList, Code]];

// Every block in the toolbox should be in this too
const blocks = [Text, HeadingOne, HeadingTwo, HeadingThree, UnorderedList, OrderedList, Code];

const defaultData: OutputData = {
  blocks: [
    {
      type: "unorderedList",
      value: ["hello"],
      id: "asdsa",
    },
  ],
}

const App: React.FC = () => {
  const handleChange = (data: OutputData) => {
    console.log(data);
  };

  return (
    <div className="editor">
      <ToolBox blocks={toolboxBlocks} align="vertical" backgroundColor="white" />

      <div className="editor-blocks">
        <InscribeEditor
          options={{ blocks }}
          data={defaultData}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
