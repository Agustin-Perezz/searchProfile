import { Repos } from '../models/Repo';
import { mapperData } from './mapper';
import { mapperRepos } from './mapper/mapperRepos';

const BASE_URL = import.meta.env.VITE_API_URL;

interface Props { 
    nameUser: string;
}

export const getDataUser = async( {nameUser} : Props) => {

    try {

        console.log( BASE_URL + nameUser );
        console.log( '${ BASE_URL }${ nameUser }/repos' );
        

        const response = await fetch(`${ BASE_URL }${ nameUser }`); 
        const data = await response.json();

        const response_repos = await fetch(`${ BASE_URL }${ nameUser }/repos`);
        const repos = await response_repos.json();

        const userInformation = mapperData( data );
        const repositoriesData: Repos[] = await mapperRepos( repos );

        console.log( userInformation, repositoriesData );

        return { userInformation, repositoriesData };
        
    } catch ( e ) {
        console.log( e );
    }
    
};