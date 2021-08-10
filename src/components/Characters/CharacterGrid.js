import React from 'react'
import Pagination from '../Ui/Pagination'
import Spinner from '../Ui/Spinner'
import CharacterItems from './CharacterItems'

function CharacterGrid({items,isLoading,page,updatePage}) {
    return isLoading?
    <Spinner/>
    :
    <>
    <section className="cards">
        {items.map(item=>(
            <CharacterItems item={item}/>
        ))}
    </section>
    <Pagination page={page} updatePage={updatePage} length={items.length}/>
    </>
}

export default CharacterGrid
