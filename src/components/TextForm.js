import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = () =>{
       // console.log("Uppercase was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted it to Upper Case!", "success");
    }

    const handleLowClick = () =>{
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted it to Lower Case!", "success");
     }

    const handleClearClick = () =>{
        let newText="";
        setText(newText);
        props.showAlert("Cleared the text!", "success");
    }

    const handleSpecialChar = () =>{
        let newText=text.replace(/[^a-zA-Z ]/g, "");
        setText(newText);
        props.showAlert("Removed the special characters!", "success");
    }

    const handleCopy = () =>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the text!", "success");
    }

    const handleExtraSpaces=() => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed the extra spaces in the text!", "success");
    }

    const handleOnChange=(event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("new Text"); //-->right way to change the state
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#272959'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#272959'}} id="myBox" rows="8"/>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>

    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

    <button className="btn btn-primary mx-2" onClick={handleSpecialChar}>Removes special characters</button>

    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#272959'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} char</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text:"Enter something in the text box above to preview it here!"}</p>
    </div>
    </div>
  );
}
