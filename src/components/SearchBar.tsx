import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '../hooks';
import { FormEvent } from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={ faGithubAlt } className='icon'/>
      <input 
        type='text'
        autoComplete='off'
        placeholder='search user...'
        onChange={ onChange }
        name='nameUser'
        value={ nameUser }
      /> 
      <button type='submit' className='form__button'> 
        <FontAwesomeIcon icon={ faMagnifyingGlass }/>
      </button>
    </form>
  )
}
