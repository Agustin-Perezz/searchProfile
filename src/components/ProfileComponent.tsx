import { User } from '../models/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyUser, faLocationDot, faTriangleExclamation, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export const ProfileComponent = ({ data }: { data: User }) => {
  return (
    <div className='profile'>
      <img src={ data.avatar_url }  alt="" className='profile__img'/>
      <div className="profile__block-1">
        <div className="profile__name-location">
          <h3> Name: { data.name } </h3>
          <div className="profile__location">
            <FontAwesomeIcon icon={ faLocationDot } />
            <h3> { data.location } </h3>
          </div>
        </div>
          <div className="follows">
            <div className="follows__followers">
              <FontAwesomeIcon icon={ faUserGroup } />
              <h5> followers: { data.followers } </h5>
              <span> - </span>
            </div>
            <div className="follows__following">
              <h5> following: { data.following } </h5>
            </div>
          </div>
        {
          data.bio 
          ? 
          <div className='profile__bio'>
            <h4> Biography </h4>
            <p> { data.bio } </p>
          </div>
          :
          <div className='profile__not-bio'>
            <FontAwesomeIcon icon={ faTriangleExclamation } />
            <p> The user has no description </p>
          </div>
        }
        <div className="profile__buttons">
          {
            data.blog 
            &&
            <a href={ data.blog } className='profile__buttons-blog' target="_blank">
              <FontAwesomeIcon icon={ faHouseChimneyUser } />
              Blog
            </a>
          }
          <a href={ data.html_url } className='profile__buttons-github' target='_blank' >
            <FontAwesomeIcon icon={ faGithubSquare } />
            GitHub
          </a>
        </div>
          </div>
    </div>
  )

}