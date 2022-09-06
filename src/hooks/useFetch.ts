import { useState, useEffect } from 'react';
import { User } from '../models/User';
import { Repos } from '../models/Repo';
import { getDataUser } from '../services/';

interface PropsState { 
  dataUser: {
    userInformation: User; 
    repositoriesData: Repos[];
  } | undefined;
  loading: boolean;
}

interface Props { 
  nameToSearch: string;
}

export const useFetch = ({nameToSearch} : Props ) => {

  const [state, setState] = useState<PropsState>({
    dataUser: undefined,
    loading: false 
  });

  useEffect(() => {
    
    const getData = async() => {
      setState({ dataUser: undefined, loading: true });
      const data = await getDataUser({ nameUser: nameToSearch });
      setState({ dataUser: data, loading: false });
    }

    if ( nameToSearch ) {
      getData();
    }
    
  }, [ nameToSearch ])
  
  return state;
  
}