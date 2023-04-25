import React, {useState} from 'react'


export default function TextArea(props) {

    const[text, setText] = useState("")
    let textWithoutSpace = text
    let previewText = text
    const toUpperCase = ()=>{
        setText(text.toUpperCase())
    }
    const toLowerCase = ()=>{
        setText(text.toLowerCase())
    }
    const clearText = ()=>{
        setText('')
    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const copyText = ()=>{
        const text = document.getElementById("box-el")
        text.select()
        navigator.clipboard.writeText(text.value)

    }
    const sentencewise = ()=>{
       const previewEl = document.getElementById("preview-el")
       previewEl.setAttribute('style', 'white-space: pre;');
       previewText = text.replaceAll(".",".\r\n")
       previewEl.textContent = previewText
       // setText(text.replaceAll(".",".\n"))
        
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
    
    <div style ={{ color: props.mode === 'dark' ? '#7cddc8' : '#0c4c50' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style ={{background: props.mode === 'dark' ? '#0c4c50' : 'white', color: props.mode === 'dark' ? '#7cddc8' : '#0c4c50'}} id="box-el" rows="8"></textarea> 
        </div>
        <button className = "btn btn-primary mx-1" onClick={toUpperCase}>To UpperCase</button>
        <button className = "btn btn-primary mx-1" onClick={toLowerCase}>To LowerCase</button>
        <button className = "btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        <button className = "btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className = "btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
        <button className = "btn btn-primary mx-1" onClick={sentencewise}>Sentencewise</button>
    </div>
    <div className="container my-2" style ={{ color: props.mode === 'dark' ? '#7cddc8' : '#0c4c50' }}>
<h3>Your text summary</h3>
<table className="table" style ={{ color: props.mode === 'dark' ? '#7cddc8' : '#0c4c50' }}>
        <thead>
           
        </thead>
        <tbody>
        <tr>
            <th scope="row">*</th>
            <td>No. of characters(including spaces): </td>
            <td>{text.length}</td>
        </tr>
        <tr>
            <th scope="row">*</th>
            <td>No. of characters(without spaces): </td>
            <td>{textWithoutSpace.replaceAll(" ", "").length}</td>
        </tr>
            <tr>
                <th scope="row">*</th>
                <td>No. of words: </td>
                <td>{text.split(" ").length}</td>
        </tr>
        <tr>
                <th scope="row">*</th>
                <td>No. of sentences: </td>
                <td>{text.lastIndexOf(".") === text.length-1 ? text.split(".").length-1 : text.split(".").length}</td>
        </tr>
        <tr>
            <th scope="row">*</th>
            <td>Time to read: </td>
            <td>{0.008 * text.split(" ").length}</td>
        </tr>

        </tbody>
</table>
        <h3>Preview</h3>
       
        <p id = "preview-el">{text.length>0 ?  previewText :'Please enter something in the text-box above to preview it !!!'}</p>

    </div>
    </>
  )
}

