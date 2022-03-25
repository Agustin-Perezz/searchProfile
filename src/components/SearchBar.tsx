import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useForm } from '../hooks';
import { FormEvent } from 'react';
import { User } from '../models/User';
import { getProfileData } from '../services';

interface SearchBarProps {
  setNameToSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ( { setNameToSearch }: SearchBarProps ) => {

  const { nameUser, onChange, reset } = useForm({
    nameUser: ''
  });

  const handleSubmit = async( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setNameToSearch( nameUser );
    reset();
  }

  return (
    <form onSubmit={ handleSubmit }> 
      {/* <img src='../assets/logo_github_icon_143196.png' alt="ashe" /> */}
      <input 
        type='text'
        placeholder='search user...'
        onChange={ onChange }
        name='nameUser'
        value={ nameUser }
      /> 
      <button type='submit'> 
        <FontAwesomeIcon icon={ faMagnifyingGlass }/>
      </button>
    </form>
  )
}
