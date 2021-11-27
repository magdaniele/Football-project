import { useEffect, useState } from "react"
import axios from 'axios'

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries'

export const useCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
      const config = {
        headers: {
          'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
          'x-rapidapi-key': '426b79f724msh6ea6d667be82161p125d48jsnb282193ab261'
        }
      }
      axios.get(endpoint, config).then((response) => {
        console.log("entroooooo: ",response.data.response);
        setCountries(response.data.response)
      }).catch((error) => {
        console.log("el error::")
        console.log(error);
      })
    }, []);
    
    return [ countries ];
}

export default useCountries;