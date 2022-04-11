import { transformDate } from "../utilities";

const BASE_URL: string = 'https://api.github.com/users/';

export const getProfileData = async ( nameUser: string | undefined ) => {

  try {
    const resp = await fetch(`${ BASE_URL }${ nameUser }`);
    const data = await resp.json();
    
    if ( data.message === 'Not Found' ) return undefined;

    const resp_repos = await fetch(`${ BASE_URL }${ nameUser }/repos`);
    const repos = await resp_repos.json();

    const repos_url: string[] = [];
    repos.map(( value: any ) => {
      if ( value.fork ) return;
      repos_url.push( value.url );
    })

    const joined: string = transformDate( data.created_at );

    return {
      name: data.name,
      short_name: data.login,
      avatar_url: data.avatar_url,
      followers: data.followers,
      following: data.following,
      location: data.location,
      twitter_username: data.twitter_username,
      bio: data.bio,
      blog: data.blog,
      html_url: data.html_url,
      created_at: joined,
      repos_url 
    };

  } catch (error) {
    console.log( error );    
  }
  
} 