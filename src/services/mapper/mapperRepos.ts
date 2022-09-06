import { Repos, ResponceRepos } from "../../models/Repo";
import { transformDate } from "../../utilities";

export const mapperRepos = async( repos: ResponceRepos[] ): Promise<Repos[]> => { 

     const list_repos : Repos[] = [];
     
     repos.map(( value: any ) => {
          if ( value.fork ) return;
     })

     for (const value of repos) {
         if ( !value.fork ) { 
               const resp = await fetch( value.url );
               const data = await resp.json();

               const created: string = transformDate( data.created_at );
  
               list_repos.push({
                 name_repo: data.name,
                 description: data.description,
                 url_repo: data.html_url,
                 num_forks: data.forks_count,
                 stars: data.stargazers_count,
                 watchers: data.subscribers_count,
                 lenguage: data.language,
                 avatar: data.owner.avatar_url,
                 created,
               });
         }
     }
     
     return list_repos;

}