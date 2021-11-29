import React from 'react'
import { useState } from 'react';

export default function Textbox( ) {

    const [text, setText] = useState("");

    const uppercase= ()=>{
        //TODO : Define function , convert the text in uppercase
    }

    const lowercase= ()=>{
        //TODO : Define function , convert the text in lowercase
    }

    const removeExtraSpace=() =>{
        //TODO : Define function , remove the extra space from the text

    }

    const clearAll= ()=>{
        //TODO : Define function , it must clear the text to empty string

    }

    const calculateWordCount = ()=>{
        //TODO : Define function , it must give the exact count of total word in test area
    
    }

    const calculateCharacters = ()=> {
        //TODO : Define function , it must give the exact count of total characters in test area

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }


    return (
        <>
        <div className="container my-2" >
            
            <div className="mb-3">
                <textarea className="form-control" placeholder="Text to be converted...." rows="5" value={text} onChange={handleOnChange} ></textarea>
            </div> 
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={uppercase} >Convert To Uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={lowercase} >Convert To Lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace} >Remove extra spaces</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={clearAll} >Clear</button>
            
    
        </div>

        <div className="container my-5" >
            <h2>Summary of text</h2>

            <p data-testid="total">
                Total Words:    <span data-testid="number-of-word">{calculateWordCount()}</span> <br/> 
                Total Characters:   <span data-testid="number-of-character" >{calculateCharacters()}</span> <br/> 
            </p>

            <h2>Preview</h2>
            <pre data-testid="preview">{text}</pre>
        </div>

        </> 
    )
}
