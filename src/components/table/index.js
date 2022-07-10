import React from "react";
import './index.css'

function Table({data,columns}){
    return (
        <table>
            <thead>
                <tr>{columns.map((item,index) => {
                    return (<th key={`thead-${index}`}>{item.label}</th>)
                })}</tr>
            </thead>
            <tbody>{data.map((item,index)=>{
                    return (<tr key={`tr-${index}`}>{columns.map((col,cindex) =>(
                        <td key={`tr-${index}-td-${cindex}`}>{col.render?col.render(item[col.key],item):item[col.key]}</td>
                    ))}</tr>)
            })}
            </tbody>
        </table>
    )
}

export default Table;