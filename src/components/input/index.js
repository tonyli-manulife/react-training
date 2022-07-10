import React,{useEffect, useState} from 'react';
import './index.css'

export default function Input({value:propsValue,onChange:propsOnChange,placeholder}){
    const [value,setValue] = useState();
    useEffect(() =>{
        setValue(propsValue)
    },[propsValue])
    const onChange=(e)=>{
        if(propsOnChange){
            propsOnChange(e)
        }else{
            setValue(e.target.value)
        }
    }
    return (
        <input placeholder={placeholder} value={value} onChange={(e)=>onChange(e)}/>
    )
}