import { useState } from "react"
import { SearchBar, Error, Loading, ProfileComponent, ReposComponent } from "../components"
import { useFetch } from '../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const DefaultPage = () => {
  
  const [nameToSearch, setNameToSearch] = useState<string>('');

  const { loading, data } = useFetch( 'https://api.github.com/users/', nameToSearch );
  
  return (
    <div className="main">
      <div className="container">
                
        <FontAwesomeIcon icon={ faGithub} className='icon__git-hub'/>

        <SearchBar setNameToSearch={ setNameToSearch } />

        { loading && <Loading /> }

        { nameToSearch.length !== 0 && data === undefined && <Error /> }
        
        {
          data !== null && data !== undefined &&
          <div className="test">
            <ProfileComponent data={ data } />
            <ReposComponent repoUrl={ data.repos_url } />
          </div>

        }

      </div>
    </div>
  )
}
