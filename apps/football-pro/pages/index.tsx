import Link from 'next/link';
import styled from 'styled-components';
import { SharedUiComponents } from '@football-project/shared-ui-components';
import Countries from '../components/country/countries/countries';
import { IndexProps } from '@football-project/types';
import axios from 'axios'
import CountriesSpecs from '../components/countries-specs/countries-specs';
const StyledPage = styled.div`
  .page {
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://api-football-beta.p.rapidapi.com/countries'
  
  const config = {
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': 'b5aa6648d6msh5bb456c86a7407dp1c70edjsn2618f9fd5c0e'
    }
  }
  const response = await axios.get(endpoint, config);
  
  return {
    props: {
      countries: response.data.response,
    },
  }
}



export function Index(props: IndexProps) {
  const {countries} = props;
  return (
    <StyledPage>
      <header>
      <SharedUiComponents title="Uninorte 2021" showTitle />
      </header>
      <Link href="/about">About</Link>
      <div>
      <Countries countries={countries}/>
      <CountriesSpecs></CountriesSpecs>
      {/* 
      <ClubSpecs></ClubsSpecs> */}
      </div>
    </StyledPage>
  );
}

export default Index;
