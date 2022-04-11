import { Repos } from '../models/Repo';
import { transformDate } from '../utilities';

export const getReposData = async ( repos: string[] | undefined ) => {
  
  if ( repos === undefined ) return;

  try {
    
    const reposData: Repos[] = [];
    for (const value of repos) {

      const resp = await fetch( value );
      const data = await resp.json();
  
      const created: string = transformDate( data.created_at );
  
      reposData.push({
        name_repo: data.name,
        description: data.description,
        url_repo: data.html_url,
        num_forks: data.forks_count,
        stars: data.stargazers_count,
        watchers: data.subscribers_count,
        lenguage: data.language,
        avatar: data.owner.avatar_url,
        created,
      })
      
    }

    return reposData;
    
  } catch (error) {
    console.log( error );    
  }
  
} 
