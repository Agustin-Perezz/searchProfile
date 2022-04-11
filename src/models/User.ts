
export interface User {
  name: string;
  short_name: string;
  avatar_url?: string;
  followers: number;
  following: number;
  location: string;
  twitter_username?: string;
  bio?: string;
  html_url: string;
  blog?: string;
  created_at: string;
  repos_url?: string[];
}
