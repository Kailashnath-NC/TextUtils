import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleCamClick = () => {
    let newText = "";
    if (text !== "") {
      newText = newText + text[0].toUpperCase();
      for (let i = 1; i < text.length; i++) {
        // if (text.charAt(i) === " " && /[a-zA-z]/.test(text.charAt[i + 1]))
        if (text.charAt(i) === " ") {
          while (text.charAt(i) === " ") {
            newText += text.charAt(i);
            i++;
          }
          newText += text[i].toUpperCase();
        }
        // {
        // newText += " " + text[i + 1].toUpperCase();
        // console.log(i);
        // i++;
        // }
        else newText += text[i].toLowerCase();
      }
      setText(newText);
    }
  };

  const handleAltClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) newText += text[i].toLowerCase();
      else newText += text[i].toUpperCase();
    }
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  return (
    <>
      <div className="mt-5 w-75 m-auto p-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control mb-3"
          id="textbox"
          placeholder="Enter Text Here"
          rows="5"
          value={text}
          style={{
            placeholderTextColor: "red",
            backgroundColor: "inherit",
            // color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
        >
          {/* {console.log(props.mode)} */}
        </textarea>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleCamClick}>
          Convert to Camelcase
        </button>
        <button className="btn btn-primary me-2" onClick={handleAltClick}>
          Convert to aLtErNaTiNgCaSe
        </button>
        <button className="btn btn-primary me-2" onClick={handleClearClick}>
          Clear
        </button>
        <h2>Total Summary</h2>
        {text.split(" ").length} words and {text.length} chararcters
        <h2>Preview</h2>
        {text.length > 0 ? text : "Enter text to preview"}
      </div>
    </>
  );
}
