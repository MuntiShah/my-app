import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    // console.log("Click on handleUpclick" + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleDownclick = () => {
    // console.log("Click on handleDownclick" + text);
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleResetclick = () => {
    setText("");
    props.showAlert("Clear the Text!", "success");
  };
  const handleCopy = () => {
    const copyTxt = document.getElementById("myTxt");
    copyTxt.select();
    navigator.clipboard.writeText(copyTxt.value);
    props.showAlert("Copy the Text!", "success");
  };
  // handelOnchnage is important to use without use we face error. So, event handler is use in this method to create equility new text with the original text value.
  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myTxt"
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownclick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleResetclick}>
          Reset
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Word And {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Your Text Above To See"}</p>
      </div>
    </>
  );
}
