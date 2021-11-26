import './countries-specs.module.scss';
import { useEffect, useState } from "react"
import axios from 'axios'
import { CountriesSpecsProps } from '@football-project/types'

export async function CountriesSpecsProps() {
  const endpoint = 'https://api-football-beta.p.rapidapi.com/teams'
  
  const config = {
    params:{
      search: name
    },
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': 'b5aa6648d6msh5bb456c86a7407dp1c70edjsn2618f9fd5c0e'
    }
  }
  const response = await axios.get(endpoint, config);
  
  return {
    props: {
     Clubes: response.data.response,
    },
  }
}
export function CountriesSpecs(props: CountriesSpecsProps) {
  return (
    <div>
      <h1>Welcome to CountriesSpecs!</h1>
    </div>
  );
}

export default CountriesSpecs;
