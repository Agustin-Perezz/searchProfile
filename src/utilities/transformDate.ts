
export const transformDate = ( data: string ) => {
  const date: Array<string> = new Date( data ).toDateString().split(' ');
  return`${ date[2] } ${ date[1] } ${ date[3] }`; 
}