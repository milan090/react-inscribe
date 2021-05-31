import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-inscribe";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
