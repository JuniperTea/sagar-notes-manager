import { Avatar, Typography, Button } from '@mui/material';
import React, {useState, useEffect} from 'react'

export default function RandomUser() {

    const [users, setUsers] = useState(null);

    useEffect(()=>{
        //on page load
        fetch('https://randomuser.me/api/')
        .then(x => x.json())
        .then(response=>{
            setUsers(response.results[0])  //to get 1 user
        })

    },[]);  //if you don't put the empty array here, you will get ALL the name fields overwriting.
    
    function getData(){
        fetch('https://randomuser.me/api/')
        .then(x => x.json())
        .then(response=>{
            setUsers(response.results[0])  //to get 1 user
        })

    }

  return (

    <div>
        <Button variant='contained' onClick={getData}>Refresh Person</Button>
        <div>
        RandomUser 
        </div>
            <Avatar sx={{height:'200px', width:'200px'}}src={users?.picture?.thumbnail} alt="api image" />
            <br/>
            <Typography>{users?.name?.title} {users?.name?.first} {users?.name?.last}</Typography>
            <br />
            <Typography>{users?.location?.postcode}</Typography>
        </div>
  )

}

//jsonformatter.org to format json objects

