import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Ui/Header'
import Spinner from '../components/Ui/Spinner'

function CharacterDetail() {
    let {id}=useParams()
    const [characterData,setCharacterData]=useState({})
    const [quotes,setQuotes]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const fetchDetails=async()=>{
            const result=await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
            const quoteResult=await axios.get(`https://www.breakingbadapi.com/api/quote?author=${result.data[0].name}`)
            setCharacterData(result.data[0])
            setQuotes(quoteResult.data)
            setLoading(false)
        }
        fetchDetails()
    },[id])

    if(loading){
        return <Spinner/>
    }else{
        return (
            <>
            <Header/>
            <div className='details'>
                <img src={characterData.img} alt=''/>
                <h1>Name: {characterData.name}</h1>
                <h1>DOB: {characterData.birthday}</h1>
                <h1>Occupation:[{
                    characterData.occupation.map((occ,index)=>{
                        if(index===characterData.occupation.length-1)
                        return occ
                        else
                        return occ+','
                    })
                    }]</h1>
                <h1>Status: {characterData.status}</h1> 
                <h1>Nickname: {characterData.nickname}</h1>
                <h1>Actor: {characterData.portrayed}</h1>
                {/* Season Apperance */}
                <div style={{width:'100%',padding:'20px'}}>
                    <h1>Season Appearances</h1>
                    {
                        characterData.appearance.map((season,index)=><p key={index}>Season {season}</p>)
                    }
                </div>
                <div style={{width:'100%',padding:'20px'}}> 
                    <h1>Quotes:</h1>
                    {
                    quotes.length!==0?quotes.map((quote,index)=><p key={quote.quote_id}>{index+1}: {quote.quote}</p>):
                    <p>No such quotes</p>
                    }
                </div>
                
            </div>
            </>
        )
    }
}

export default CharacterDetail
