import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const root_el = document.getElementById("root");

const root = createRoot(root_el);
root.render(<App />);