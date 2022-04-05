
export interface User {
  name: string;
  short_name: string;
  avatar_url?: string;
  followers: number;
  following: number;
  location: string;
  public_repos: number;
  twitter_username?: string;
  bio?: string;
  repos_url: string;
  html_url: string;
  blog?: string;
  created_at: string;
}
