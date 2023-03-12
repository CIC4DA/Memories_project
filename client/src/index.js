// in this file where we are going to connect our react application to index html file 

import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById('root'));

root.render(
    <App/>
);