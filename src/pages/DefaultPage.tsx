import { useState } from "react"
import { SearchBar, ProfileComponent, ListRepos } from "../components"
import { useFetch } from '../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Loading, CustomError } from '../components/Loaders-Errors';

export const DefaultPage = () => {
  
  const [nameToSearch, setNameToSearch] = useState<string>('');

  const { loading, data } = useFetch( 'https://api.github.com/users/', nameToSearch );
  
  return (
    <div className="main">
      <div className="container">
                
        <FontAwesomeIcon icon={ faGithub } className='icon__git-hub'/>
        <SearchBar setNameToSearch={ setNameToSearch } />

        { loading && <Loading /> }

        <div className="error__container">
          { nameToSearch.length !== 0 && data === undefined && <CustomError dataChange={ data } /> }
        </div> 
        
        {
          data !== null && data !== undefined &&
          <div className="container__data">
            <ProfileComponent data={ data } />
            <ListRepos repoUrl={ data.repos_url } />
          </div>
        }

      </div>
    </div>
  )
}
