import React from 'react'
import { useState } from 'react';

export default function Textbox( ) {

    const [text, setText] = useState("");

    const uppercase= ()=>{
        let textt=text.toUpperCase();
        setText(textt);
    }

    const lowercase= ()=>{
        let textt=text.toLowerCase();
        setText(textt);
    }

    const removeextraspace=() =>{
        let textt=text.split(/[ ]+/);
        setText(textt.join(" "));
    }

    const clearall= ()=>{
        setText("");
    }
    
    const handleonchange= (event)=>{
        setText(event.target.value);
    }


    return (
        <>
        <div className="container my-2" >

            <div className="mb-3">
                <textarea className="form-control" data-testid="mybox" placeholder="Text to be converted...." rows="5" value={text} onChange={handleonchange} ></textarea>
            </div> 
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={uppercase} >Convert To Uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={lowercase} >Convert To Lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={removeextraspace} >Remove extra spaces</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={clearall} >Clear</button>
            
    
        </div>

        <div className="container my-5" >
            <h2>Summary of text</h2>

            <p id="total">
            Total Words:    <b>{text.split(/\s+/).filter((element) => {return element.length!== 0}).length}</b> <br/> 
            Total Characters:   <b>{text.length}</b> <br/> 
            </p>

            <h2>Preview</h2>
            <p id="final">{text}</p>
        </div>

        </> 
    )
}
