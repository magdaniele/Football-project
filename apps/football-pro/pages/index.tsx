import Link from 'next/link';
import styled from 'styled-components';
import { SharedUiComponents } from '@football-project/shared-ui-components';
import Countries from '../components/country/countries/countries';
import { request, gql } from 'graphql-request'
import { IndexProps } from '@football-project/types';
import axios from 'axios'

const StyledPage = styled.div`
  .page {
  }
`;

/* const query = gql`
    query {
    countries {
      code
      name
    }
  }
`*/

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries'

export async function getStaticProps() {
  
  const config = {
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': 'b5aa6648d6msh5bb456c86a7407dp1c70edjsn2618f9fd5c0e'
    }
  }
  const response = await axios.get(endpoint, config);
  console.log("ddede")
  console.log(response)
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
      <SharedUiComponents title="Uninorte 2021" showTitle />
      <Link href="/about">About</Link>
      <Countries countries={countries} />
    </StyledPage>
  );
}

export default Index;
