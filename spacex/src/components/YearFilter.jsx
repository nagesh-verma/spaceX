import React from 'react'

function YearFilter({year,changeHandler}) {
    return (
        <div className="col p-2">
            <button className="btn btn-dark" onClick = {()=>{
                changeHandler(year);
                }}>{year}
            </button>
        </div>
    )
}

export default YearFilter
