import React from "react";

import { useBold, InscribeEditor, List, OutputData, ToolBox, Text } from "react-inscribe";
import "react-inscribe/dist/index.css";

const App: React.FC = () => {
  const { isBoldOn, setIsBoldOn } = useBold();

  const handleChange = (data: OutputData) => {
    console.log(data);
  };

  return (
    <div>
      <ToolBox blocks={[List, Text]} />
      <InscribeEditor
        options={{ blocks: [List, Text] }}
        data={{
          blocks: [
            {
              type: "list",
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
