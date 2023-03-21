import React, {useState}from 'react'

export default function TextForm(props) {

    const handleonClick = ()=>{
        // console.log("Uppercase was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowClick = ()=>{
      // console.log("Uppercase was clicked" + text );
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleonchange = (event)=>{
        // console.log("onchange");
        setText(event.target.value);
    }

    const handleclearClick = (event)=>{
      // console.log("onchange");
      setText("");
  }

  const [text,setText] = useState("");
  return (
    <>
    <div className='container'>
        <div class="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8" ></textarea>
        </div>
    <button className="btn btn-primary mx-2" onClick={handleonClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>

    </div>

    <div className="container my-4" >
      <p>Some data you filled</p>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>It can be read in {0.008 * text.split(" ").length} minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something To Preview"}</p>
    </div>
    </>
  )
}
