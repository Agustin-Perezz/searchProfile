import { useState, useEffect } from 'react';
import { getReposData } from '../services';
import { Repos } from '../models/Repo';
import { RepoComponent } from './RepoComponent';
import { LoadingTrePoints } from './Loaders-Errors';

export const ListRepos = ({ repoUrl }: { repoUrl: string[] | undefined }) => {

  const [dataRepos, setDataRepos ] = useState<Repos[]>();

  useEffect(() => {
    const getData = async() => {
      const data = await getReposData( repoUrl );
      setDataRepos( data );
    }
    getData();
  }, []);

  return (
    <div className='all__repos animate__animated animate__zoomIn'>

      <h4> Public Repositories </h4>

      { dataRepos === undefined && <LoadingTrePoints /> }

      { repoUrl!.length <= 0 && <h6> Has no repositories yet. </h6>}

      <div className="container__repos">
        { 
          dataRepos?.map(( value, index ) => (
            <RepoComponent { ...value } key={ index } />
            ))
        }
      </div>

    </div>
  )
}
