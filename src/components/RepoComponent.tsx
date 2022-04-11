import { faCodeFork, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Repos } from '../models/Repo';

export const RepoComponent = ({
  name_repo,
  description,
  url_repo,
  created,
  watchers,
  num_forks,
  stars,
  avatar
}: Repos ) => {

  return (
    <div className='repo'>
      <div className="repo__left">
        <img src={ avatar } alt="perri" />
        <div className='repo__info'>
          <a href={ url_repo } target='_blank' > { name_repo } </a>
          <p> { description ? description : 'has no a description' } </p>
        </div>
      </div>
      <div className="repo_right">
        <div className="repo__stats">
          <div className="repo__stat">
            <FontAwesomeIcon icon={ faStar } style={{ color: '#dfbe49'}} /> 
            <span> { stars } </span>
          </div>
          <div className="repo__stat">
            <FontAwesomeIcon icon={ faEye } style={{ color: '#37aad1'}} /> 
            <span> { watchers } </span>
          </div>
          <div className="repo__stat">
            <FontAwesomeIcon icon={ faCodeFork } /> 
            <span> { num_forks } </span>
          </div>
        </div>
        <h5> { created } </h5>
      </div>
    </div>
  )
}