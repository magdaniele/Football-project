import { useEffect, useState } from "react"
//import { request, gql, GraphQLClient } from 'graphql-request'
import axios from 'axios'

/* const query = gql`
    {
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }
`*/

const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr'

/* const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'Bearer MY_TOKEN',
  },
}) */

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
        console.log(response.data.response);
        setCountries(response.data.response)
      }).catch((error) => {
        console.log(error);
      })
    }, []);
    
    return [ countries ];
}

export default useCountries;