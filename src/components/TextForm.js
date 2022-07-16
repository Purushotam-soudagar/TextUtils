import React from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
export default function TextForm(props) {
  const handleUpClick = ()=>{
    setText(Text.toUpperCase());
    props.showAlert("Converted To Upper Case","success");
  }
  const handleLowerClick = ()=>{
    setText(Text.toLowerCase());
    props.showAlert("Converted To Lower Case","success");
  }
  const handleClearClick = ()=>{
    setText("");
    props.showAlert("text has been Cleared","success");
  }
  const handleSpaceClick = ()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed","success");
  }
  const handleCopyClick=()=>{

    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleOnchange = (event)=>{
    setText(event.target.value);
  }
  const [Text, setText] = useState('');
  //Text="New text"; wrong way to update the Text
  // setText("Please Enter New text Here"); correct way to update the text
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={Text} onChange={handleOnchange} rows="8" style={{backgroundColor:props.mode==="light"?"white":"#001e3c",color:props.mode==="light"?"black":"white"}}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleSpaceClick}>Remove Extra Space</button>

    </div>
    <div className="container my-3">
      <h2>Your Text summary</h2>
      <p><b>{Text.split(" ").length}</b> words and <b>{Text.length}</b> characters</p>
      <p><b>{0.008 *Text.split(" ").length }</b> Minutes required to Read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Enter Something in TextBox Above  To Preview Here"}</p>
    </div>
    </>
    
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
