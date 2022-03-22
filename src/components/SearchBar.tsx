import { User } from '../models/User';

interface Props {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const SearchBar = ({ setUser }: Props ) => {
  return (
    <div> SearchBar </div>
  )
}
