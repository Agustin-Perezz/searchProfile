import { Repos } from '../models/Repo';
import { RepoComponent } from './RepoComponent';

interface Props {
  dataRepos: Repos[]
};

export const ListRepos: React.FC<Props> = ({ dataRepos }) => {

  return (
    <div className='all__repos animate__animated animate__zoomIn'>
      
      <h4> Public Repositories </h4>

      { dataRepos.length === 0 && <h6> Has no repositories yet. </h6>}

      <div className="container__repos">
        { 
          dataRepos?.map(( value, index ) => (
            <RepoComponent { ...value } key={ index } />
            ))
        }
      </div>

    </div>

)}
