import React, {useState} from 'react'

export default function TextForm(props) {
    const handle = ()=>{
setText("You have clicked the button")
    }
    const convertUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const convertLower = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
  }
  const convertFont = ()=>{
   document.getElementById('myBox').style.fontStyle="italic";
 }
const normal = ()=>{
  document.getElementById('myBox').style.fontStyle="normal";
}
const bolding = ()=>{
  document.getElementById('myBox').style.fontWeight="bold";
}
var i = 0;

const try_font = ()=>{
var fonts = ["Times New Roman","sans-serif","serif","cursive","ui-serif","math","fangsong","fantasy","Lucida Console"];
if(i==fonts.length)
  {
    i=0;
  }
  document.getElementById('myBox').style.fontFamily=fonts[i];
  i++;
}


const clear = ()=>{
  let newText = "";
  setText(newText);
}
    
const handleOnChange = (event)=>{
        setText(event.target.value)
}

    const [text,setText] = useState('Enter the Text');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>

<div class="mb-3">
  <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text} 
  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
  ></textarea>
</div>
<button className="btn btn-primary" onClick={convertUpper}>UpperCase</button>
   
<button className="btn btn-primary mx-3" onClick={convertLower}>LowerCase</button>

<button className="btn btn-primary mx-1" onClick={convertFont}>Italic</button>

<button className="btn btn-primary mx-3" onClick={normal}>Normalize Text</button>

<button className="btn btn-primary mx-1" onClick={bolding}>Bold</button>

<button className="btn btn-primary mx-3" onClick={clear}>Clear</button>

<button className="btn btn-primary mx-1" onClick={try_font}>Try Fonts</button>


</div>

    <div className="container">
      <h1>Your Text Summary</h1>
      <p style={{ color:props.mode==='dark'?'white':'black'}}>{text.split("").length} words and {text.length} characters</p>
      <h3 style={{ color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split("").length} Minutes to Read content </h3>
    </div>
    </>
  )
}
