import { User } from '../../models/User';
import { transformDate } from '../../utilities';
import { ResponseUser } from '../../models/ResponseUser';

export const mapperData = ( data : ResponseUser ) : User => {

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
    }

}