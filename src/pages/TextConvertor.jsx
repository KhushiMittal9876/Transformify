import React, { useState } from "react";

function TextConvertor(props) {
  const [text, setText] = useState("");
  const  handlechange = (e) =>{
    setText(e.target.value);
  }
  const handleClickUpper = ()=>{
    let upper = text.toUpperCase();
    setText(upper);
  }
  
  const handleClickLower = ()=>{
    let lower = text.toLowerCase();
    setText(lower);
  }

  const handleClickClear = ()=>{
    setText("");
  }

  const handleCopy = ()=>{
    var text = document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <div>
      <h1 className="p-4 text-3xl">{props.heading}</h1>
      <div>
        <textarea className="textarea textarea-bordered textarea-lg w-full lg:max-w-6xl mb-4 sm:max-w-xs" id="floatingTextarea2" placeholder="Paste the text here..." value={text} onChange={handlechange} rows="9"> </textarea>
      </div>
      <button className="btn glass mx-4" onClick={handleClickUpper}>UPPERCASE</button>
      <button className="btn glass mx-4" onClick={handleClickLower}>lowercase</button>
      <button className="btn glass mx-4" onClick={handleClickClear}>Clear Text</button>
      <button className="btn glass mx-4" onClick={handleCopy}>Copy Text</button>
      <div className="m-3 text-2xl">
             <h3>{text.length} Characters</h3>
          </div>
    </div>
  );
}

export default TextConvertor;
