import React from 'react'

function BooleanButton({value,changeHandler,text}) {
    return (
        <div className="col p-2">
              <button className="btn btn-info" onClick = {()=>{
                changeHandler(value);
               }}>{text}</button>
        </div>
    )
}

export default BooleanButton
