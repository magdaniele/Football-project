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
      'x-rapidapi-key': '544422e956msh41857eaa837a1aap128469jsn881993a8444a'
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
