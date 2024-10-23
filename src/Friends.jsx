import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './Firend'
export default function Friends(){

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(rec => rec.json())
        .then(data =>setFriends(data))
    },[])

    return(
        <div className='box'>
            <h3>Firends :{friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 *1. state to hold data 
 2./ use effect with dependency array
 3.use fetch to load data
 4.set loaded to state
 5. display data on the component
 */ 