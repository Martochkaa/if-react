
import {useEffect, useState} from 'react';






const FetchHotelsRouter = () =>  {  

  const [setError] = useState(null);
  const [setIsLoaded] = useState(false);
  const [setItems] = useState([]);

  useEffect(() => {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )
  },)
}

export default FetchHotelsRouter;

  
