import * as React from "react";
import { render } from "react-dom";
import ReactQuill, { Mixin, Toolbar, Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const App = () => <ReactQuill />;

render(<App />, document.getElementById("root"));
