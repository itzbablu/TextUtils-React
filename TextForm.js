import React ,{useState} from 'react'

let count = 0;
export default function TextForm(props) {
    const uppercase = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.alert("Converted to upperCase","success");
    }
    const lowercase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.alert("Converted to LowerCase","success");
    }
    const onchangehandler= (event)=>{
        setText(event.target.value);
        count =  count +1;
        setpreviewtext(event.target.value);
    }
    const ClearText= ()=>{
        setText("");
        setpreviewtext("");
        props.alert("Text Cleared","success");
    }
    const copyText = () =>
    {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("Copied to your Clipboard","success");
    }
    const RemoveSpaces= () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.alert("Extra Spaces has been Removed","success");
    }
    const [text,setText] = useState('Enter your text here');
    const [previewtext,setpreviewtext] = useState('');    
  return (
    <div className='container'  >
        <h1>{props.heading}</h1>
        <div className="mb-3" style={props.style}>
        <textarea className="form-control" value={text} onChange ={onchangehandler} id="mybox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary" onClick={uppercase}>{props.CapitalButton}</button>
    <button className="btn btn-primary mx-2" onClick={lowercase}>{props.Lowercase}</button>
    <button className="btn btn-primary " onClick={ClearText}>{props.clear}</button>
    <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary " onClick={RemoveSpaces}>Remove Spaces</button>
    <div className='container my-2'>
    <h1>Your Text Summary</h1>
    <p>{text == "" ? text.split(" ").length-1 : text.split(" ").length} Words and {text.length} characters</p>
    <p>{text == "" ? 0:0.008*text.split(" ").length } Minutes will take to read this Paragraph </p>
    <h2>Preview</h2>
    <p>{previewtext}</p>
    </div>
    </div>
    
  )
}
