import { User } from '../models/User';

export const ProfileComponent = ({ data }: { data: User }) => {
  return (
    <div>
      <img src={ data.avatar_url } alt="" />
    </div>
  )
}
