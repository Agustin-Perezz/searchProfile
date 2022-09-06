import { User } from '../models/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faLocationDot, faTriangleExclamation, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const ProfileComponent = ({ data }: { data: User }) => {
  return (
    <div className='profile animate__animated animate__zoomIn'>
      <div className="profile__block-1">
        <div className="profile__general">
          <img src={ data.avatar_url }  alt="" className='profile__img'/>
          <div className="descriptions">
            <span className='descriptions__name'> { data.name } </span>
            <h6> @{ data. short_name } </h6>
            <span className='descriptions__date'> Joined { data.created_at } </span>
          </div>
        </div>
        {
          data.bio
          ? 
          <div className='profile__bio'>
            <p> { data.bio } </p>
          </div>
          :
          <div className='profile__not-bio'>
            <FontAwesomeIcon icon={ faTriangleExclamation } />
            <p> This profile has no bio. </p>
          </div>
        }
      </div>
      <div className="profile__block-2">
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
        <div className="profile__buttons">
          <div className="button">
            <FontAwesomeIcon icon={ faLocationDot } className='button__location'/>
            { data.location }
          </div>
          <div className='button'>
            <FontAwesomeIcon icon={ faTwitter } className='button__twiter'/>
            { data.twitter_username ? data.twitter_username : 'Not Available' }
          </div>
          <div className="button">
            <FontAwesomeIcon icon={ faLink } />
            <a href={ data.blog ? data.blog : '#' } className={`${ data.blog ? 'on' : 'off'} blog`} target={ data.blog && '_blank'}> 
              { data.blog ? 'Blog' : 'Not Available'} 
            </a>
          </div>
          <div className="button">
            <FontAwesomeIcon icon={ faGithubSquare } />
            <a href={ data.html_url } className='github' target='_blank'> Git-Hub </a>
          </div>
        </div>
      </div>
    </div>
  )

}