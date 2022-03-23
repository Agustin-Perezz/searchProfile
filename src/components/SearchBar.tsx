import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useForm } from '../hooks';
import { Dispatch, FormEvent } from 'react';
import { User } from '../models/User';
import React from 'react';
// import { PropsStateUser } from '../models/User';

interface SearchBarProps {
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>
}


export const SearchBar = ( { setUserData }: SearchBarProps ) => {

  const { nameUser, onChange, formData } = useForm({
    nameUser: ''
  });

  const handleSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setUserData( formData );
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
