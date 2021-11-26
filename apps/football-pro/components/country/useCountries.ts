import { useEffect, useState } from "react"
import axios from 'axios'

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries'

export const useCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
      const config = {
        headers: {
          'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
          'x-rapidapi-key': 'b5aa6648d6msh5bb456c86a7407dp1c70edjsn2618f9fd5c0e'
        }
      }
      axios.get(endpoint, config).then((response) => {
        console.log("entroooooo: ",response.data.response);
        setCountries(response.data.response)
      }).catch((error) => {
        console.log(error);
      })
    }, []);
    
    return [ countries ];
}

export default useCountries;