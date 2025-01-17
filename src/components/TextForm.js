import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleDownClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra whitespaces removed!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("Text is cleared!","success");
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
  <div className="btn btn-primary my-3 rounded-3" onClick={handleOnClick}>Convert to UpperCase</div>
  <div className="btn btn-primary mx-2 my-3 rounded-3" onClick={handleDownClick}>Convert to LowerCase</div>
  <div className="btn btn-primary mx-2 my-3 rounded-3" onClick={handleClearClick}>Clear Text</div>
  <div className="btn btn-primary mx-2 my-3 rounded-3" onClick={handleExtraSpaces}>Remove ExtraSpaces</div>
  <div className="btn btn-primary mx-2 my-3 rounded-3" onClick={handleCopy}>Copy Text</div>
  
</div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3> Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes taken to read</p>
        <h3> Preview</h3>
        <p>{text.length>0? text:"Enter text in textbox to preview it here!"} </p>
    </div>
    </>
  )
}
