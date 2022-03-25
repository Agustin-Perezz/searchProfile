import { useState } from "react"
import { SearchBar, Error, Loading } from "../components"
import { useFetch } from '../hooks/useFetch';

export const DefaultPage = () => {
  
  const [nameToSearch, setNameToSearch] = useState<string>('');

  const { loading, data } = useFetch( 'https://api.github.com/users/', nameToSearch );

  return (
    <div className="main">
      <div className="container">
                
        <SearchBar setNameToSearch={ setNameToSearch } />

        { loading && <Loading /> }

        { nameToSearch.length !== 0 && data === undefined && <Error /> }

        {/* { userData === undefined && nameToSearch?.length !== 0 && <Error /> } */}
        {/* {
          user &&
          <div>
              <h1> test view </h1>
              <span> hellow viewer from spin </span>
          </div>
        } */} 

      </div>
    </div>
  )
}
