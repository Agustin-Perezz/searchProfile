import { useState } from "react"
import { SearchBar, ProfileComponent, ListRepos } from "../components"
import { useFetch } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Loading, CustomError } from '../components/Loaders-Errors';

export const UserPage = () => {
  
  const [nameToSearch, setNameToSearch] = useState<string>('');

  const { loading, dataUser } = useFetch({ nameToSearch });
  
  return (
    <div className="main">
      <div className="container">
                
        <FontAwesomeIcon icon={ faGithub } className='icon__git-hub'/>
        <SearchBar setNameToSearch={ setNameToSearch } />

        { loading && <Loading /> }

        <div className="error__container">
          { !loading && nameToSearch.length !== 0 && dataUser === undefined && <CustomError dataChange={ dataUser } /> }
        </div> 
        
        {
          dataUser !== null && dataUser !== undefined &&
          <div className="container__data">
            <ProfileComponent data={ dataUser.userInformation } />
            <ListRepos dataRepos={ dataUser.repositoriesData } />
          </div>
        }

      </div>
    </div>
  )
}
