import React from 'react'

function Pagination({page,updatePage,length}) {
    return (
        <div className='pagination center'>
            <button className={(page===1)?'btn-disabled':'btn'} disabled={(page===1) && true} onClick={()=>{updatePage(false)}}>Prev</button>
            <h2>{page}</h2>
            <button className={(length<10)?'btn-disabled':'btn'} disabled={length<10 && true} onClick={()=>{updatePage(true)}} >Next</button>
        </div>
    )
}

export default Pagination
