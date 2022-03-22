import { useState } from "react"
import { SearchBar } from "../components"
import { User } from '../models/User';

export const DefaultPage = () => {

  const [user, setUser] = useState<User>();  

  return (
    <div>

      <SearchBar setUser={ setUser } />

    </div>
  )
}
