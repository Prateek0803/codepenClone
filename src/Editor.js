import React,{useState} from 'react'
import { AiOutlineArrowsAlt } from "react-icons/ai";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import  'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'  
export default function Editor(props) {
    const{
        language,
        displayName,
        value,
        onChange
    } = props;

    const handleChange = (editor,data,value)=>{
        onChange(value)
    }

    const [open ,setOpen] = useState(true);

    const handleClick = ()=>{
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className={`editor-container${open? '':'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button onCLick={handleClick}> <AiOutlineArrowsAlt /> </button>
            </div>
            <ControlledEditor 
                onBeforeChange = {handleChange}
                value = {value}
                className="codemirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    lineNumbers:true,
                    theme:"material"
                }}
            />
        </div>
    )
}
