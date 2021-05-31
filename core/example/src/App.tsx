import React from "react";

import { useBold, InscribeEditor, List, OutputData, ToolBox, Paragraph } from "react-inscribe";
import "react-inscribe/dist/index.css";

const App: React.FC = () => {
  const { isBoldOn, setIsBoldOn } = useBold();

  const handleChange = (data: OutputData) => {
    console.log(data);
  };

  return (
    <div>
      <ToolBox blocks={[List, Paragraph]} />
      <InscribeEditor
        options={{ blocks: [List, Paragraph] }}
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
