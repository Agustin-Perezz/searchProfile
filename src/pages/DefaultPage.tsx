import { useEffect, useState } from "react"
import { SearchBar } from "../components"
import { User } from '../models/User';

export const DefaultPage = () => {

  const [userData, setUserData] = useState<User>();  
  const [isLoading, setIsLoading] = useState<boolean>( false );

  useEffect(() => {
    console.log( userData?.nameUser );
  }, [ userData ])

  return (
    <div className="container">

      <SearchBar setUserData={ setUserData } />

      { isLoading && <div className="spinner"></div> }
      {/* {
         user &&
         <div>
            <h1> test view </h1>
            <span> hellow viewer from spin </span>
        </div>
      } */} 

    </div>
  )
}
