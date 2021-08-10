import React from 'react'
import { useHistory } from 'react-router-dom'


function CharacterItems({item}) {

    const history=useHistory()
    const redirectToCharacter=()=>{
        history.push(`/${item.char_id}`)
    }

    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          <li><button className='btn' onClick={redirectToCharacter}>View Profile</button></li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItems
