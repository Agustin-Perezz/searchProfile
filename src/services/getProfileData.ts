
const BASE_URL: string = 'https://api.github.com/users/';

export const getProfileData = async ( nameUser: string | undefined ) => {

  try {
    const resp = await fetch(`${ BASE_URL }${ nameUser }`);
    const data = await resp.json();
    
    if ( data.message === 'Not Found' ) return undefined;

    return {
      name: data.name,
      avatar_url: data.avatar_url,
      followers: data.followers,
      location: data.location,
      public_repos: data.public_repos,
      twitter_username: data.twitter_username,
      bio: data.bio,
      repos_url: data.repos_url,
    };

  } catch (error) {
    console.log( error );    
  }
  
} 