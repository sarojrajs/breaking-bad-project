import React from 'react'

function Search({setQuery}) {

    const updateQuery=(e)=>{
        setQuery(e.target.value)
    }

    return (
        <section className="search">
            <form>
                <input type='text' placeholder='Search for the characters' className='form-control' autoFocus onChange={updateQuery}/>
            </form>
        </section>
    )
}

export default Search
