import React, { useState } from 'react'
// import PropTypes from 'prop-types'




export default function TestForm(props) {
    const HandleUpperClick = () => {
        // console.log("button was clicked  : ")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("All text converted to uppercase" , "success")
    }
    const HandleLowerClick = () => {
        // console.log("button was clicked  : ")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("All text convered to lower case" , "success")
    }
    const HandleClearClick = () => {
        // console.log("button was clicked  : ")
        let newText = '';
        setText(newText);
        props.showAlert("Cleared" , "success")
    }

    const HandleChange = (event) => {
        // console.log("Change")
        setText(event.target.value)
    }
    
    const HandleCopy = () =>{
        let text = document.getElementById('floatingTextarea2');
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard" , "success")
    }

    const HandleExtraClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed" , "success")
    }


    // const nulltext = () => {
    //     props.showAlert("Please enter the text below" , "danger")
    // }
       
        
    
    const [text, setText] = useState('');
    
    return (
        <>
        
        
        <div>
            <h3 style = {{ color : props.mode === `dark` ?`white`:`black`}}>{props.heading}</h3>
            <div className="form-floating">

                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={HandleChange} style={{ height: "300px", backgroundColor : props.mode === `dark` ?`grey`:`white` , color : props.mode === `dark` ?`white`:`black`}}>
                </textarea>

                <button className="btn btn-primary my-2" onClick={HandleExtraClick}>Remove extra spaces</button>
                <button className="btn btn-primary my-2 mx-2" onClick={HandleUpperClick}>Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={HandleLowerClick}>Lowercase</button>
                <button className="btn btn-primary my-2  mx-2" onClick={HandleClearClick}>Clear</button>
                <button className="btn btn-primary my-2 mx-2" onClick={HandleCopy}>Copy</button>
            </div>

            <div className="container my-3" style = {{ color : props.mode === `dark` ?`white`:`black`}}>
                <h3>Your text summery</h3>
                <p>Words : {text.split(" ").length}</p>
                <p>Characters : {text.length}</p>
                <p>{0.008*(text.split(" ").length)} : Min to read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter you text in the above box to preview it here...."}</p>
            </div>
        </div>
        </>
    )
}
