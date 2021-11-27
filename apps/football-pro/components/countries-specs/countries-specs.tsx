import './countries-specs.module.scss';
import { useEffect, useState } from "react"
import axios from 'axios'
import { Country } from '@football-project/types'

export async function CountriesSpecsProps() {
  const endpoint = 'https://api-football-beta.p.rapidapi.com/teams'
  
  const config = {
    params:{
      search: name
    },
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': '426b79f724msh6ea6d667be82161p125d48jsnb282193ab261'
    }
  }
  const response = await axios.get(endpoint, config);
  
  return {
    props: {
     Clubes: response.data.response,
    },
  }
}
export function CountriesSpecs(props: Country) {
  return (
    <div>
      <h1>Welcome to CountriesSpecs!</h1>
    </div>
  );
}

export default CountriesSpecs;
