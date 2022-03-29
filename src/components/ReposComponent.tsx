import { useState } from 'react';

export const ReposComponent = ({ repoUrl }: { repoUrl: string }) => {

  // const [dataRepo, setDataRepo ] = useState(second)
  
  return (
    <pre>
      { JSON.stringify( repoUrl, null, 5 ) }
    </pre>
  )
}
