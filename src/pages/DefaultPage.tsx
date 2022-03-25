import { useState } from "react"
import { SearchBar, Error, Loading, ProfileComponent, ReposComponent } from "../components"
import { useFetch } from '../hooks/useFetch';

export const DefaultPage = () => {
  
  const [nameToSearch, setNameToSearch] = useState<string>('');

  const { loading, data } = useFetch( 'https://api.github.com/users/', nameToSearch );
  console.log(`Data es: ${ data?.name }`)

  return (
    <div className="main">
      <div className="container">
                
        <SearchBar setNameToSearch={ setNameToSearch } />

        { loading && <Loading /> }

        { nameToSearch.length !== 0 && data === undefined && <Error /> }

        {
          data !== null && data !== undefined &&
          <div className="test">
            <ProfileComponent />
            <ReposComponent />
          </div>
        }

      </div>
    </div>
  )
}
