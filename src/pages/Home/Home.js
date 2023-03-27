import { Skeleton } from '@mui/material';
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFact } from '../../data/catFactSlice';
import { getAppName, UserDataContext} from '../../shared/data'
import { useRouteProtector } from '../../shared/hooks/useRouteProtector';

export default function Home() {
  


  useRouteProtector()
  const dispatch = useDispatch();
  const fact = useSelector(store=>store.catFact.fact);

  const loadingFact = useSelector(store => store.catFact.loadingFact);

  function loadFact(){
    dispatch(getFact());

  }

  const { username, email, setUsernameGlobal } = useContext(UserDataContext);
  const Appname = getAppName();

  return (
    <div>
      <div><button onClick={loadFact}>Load Fact</button>
        <hr />
        {
        loadingFact? <Skeleton height={50} /> : <p>{fact}</p>
}
      </div>
      {Appname} home | Welcome {username} 
      
      </div>
  )
}


//https://official-joke-api.appspot.com/random_joke