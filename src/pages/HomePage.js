import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CharacterGrid from '../components/Characters/CharacterGrid';
import Header from '../components/Ui/Header'
import Search from '../components/Ui/Search'

function HomePage() {
    const [items,setItems]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [query,setQuery]=useState('');
    const [pageNumber,setPageNumber]=useState(1)

    useEffect(()=>{
        const time=setTimeout(async()=>{
            setIsLoading(true)
            var myQuery=query.split(' ').join('+');
            var page=((pageNumber-1)*10).toString()
            const result=await axios.get(`https://www.breakingbadapi.com/api/characters?name=${myQuery}&limit=10&offset=${page}`)
            setItems(result.data);
            setIsLoading(false)
        },500)
        return ()=>{
            clearTimeout(time)
        }
    },[query,pageNumber])

    const updatePage=(flag)=>{
        if(flag){
            setPageNumber(prevState=>prevState+1)
        }else{
            setPageNumber(prevState=>prevState-1)
        }
    }

    return (
        <div className='container'>
            <Header/>
            <Search setQuery={setQuery}/>
            <CharacterGrid isLoading={isLoading} items={items} page={pageNumber} updatePage={updatePage}/>
        </div>
    )
}

export default HomePage
