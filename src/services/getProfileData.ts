import { transformDate } from "../utilities";

const BASE_URL: string = 'https://api.github.com/users/';

export const getProfileData = async ( nameUser: string | undefined ) => {

  try {
    const resp = await fetch(`${ BASE_URL }${ nameUser }`);
    const data = await resp.json();
    
    if ( data.message === 'Not Found' ) return undefined;

    const joined: string = transformDate( data.created_at );

    return {
      name: data.name,
      short_name: data.login,
      avatar_url: data.avatar_url,
      followers: data.followers,
      following: data.following,
      location: data.location,
      public_repos: data.public_repos,
      twitter_username: data.twitter_username,
      bio: data.bio,
      repos_url: data.repos_url,
      blog: data.blog,
      html_url: data.html_url,
      created_at: joined,
    };

  } catch (error) {
    console.log( error );    
  }
  
} 