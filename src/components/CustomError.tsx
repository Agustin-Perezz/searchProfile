import { useEffect, useState } from "react"
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export const CustomError = ({ dataChange }: { dataChange: undefined }) => {

  const [fadeProp, setFadeProp] = useState('animate__animated animate__fadeIn');

  useEffect(() => {

    const timeout = setInterval(() => {
        setFadeProp('animate__animated animate__fadeOut')
    }, 1800);

    return () => {
      setFadeProp('animate__animated animate__fadeIn')
      clearInterval( timeout )
    };
  }, [ dataChange ])
  

  return (
    <>
        {
          <div className={`custom__error ${ fadeProp }`}>
            {/* <BiErrorCircle /> */}
            <FontAwesomeIcon icon={ faCircleExclamation } />
            <h5> Pokemon is not found! </h5> 
          </div>
        }
    </>
  )
}
