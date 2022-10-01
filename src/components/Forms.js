// import React from "react";
import React, { useState } from "react";

export default function TextForms(props) {
  // useState
  const [text, setText] = useState("Enter Text Here...");

  const upperCase = () => {
    console.log("Clicked" + text);
    setText(text.toLocaleUpperCase());
  };

  const lowerCase = () => {
    console.log("Clicked" + text);
    setText(text.toLocaleLowerCase());
  };

  const change = (event) => {
    console.log("Clicked");
    setText(event.target.value);
  };

  return (
    <div className="my-2">
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          //   for state
          value={text}
          //
          onChange={change}
          //   placeholder="Enter Text Here..."
        ></textarea>
      </div>

      {/* button.btn.btn-primary */}
      <button className="btn btn-primary" onClick={upperCase}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={lowerCase}>
        Convert To LowerCase
      </button>

      <div className="my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length}
        </p>

        <h2 className="my-3">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
