import { useState, useEffect } from 'react';
import { getProfileData } from '../services';
import { User } from '../models/User';

interface PropsState { 
  data: User | undefined | [];
  loading: boolean;
}

export const useFetch = ( endPoint: string, user: string ) => {

  const [state, setState] = useState<PropsState>({
    data: [],
    loading: false 
  });

  useEffect(() => {

    const getData = async() => {
      setState({ data: [], loading: true });
      const data = await getProfileData( user );
      setTimeout(() => {
        setState({
          data,
          loading: false
        })
      }, 200);
    }

    if ( user.length !== 0 ) {
      getData();
    }

  }, [ user ])
  
  return state;
  
}