import Link from 'next/link';
import styled from 'styled-components';
import { SharedUiComponents } from '@football-project/shared-ui-components';
import Countries from '../components/country/countries/countries';
import { request, gql } from 'graphql-request'
import { IndexProps } from '@football-project/types';

const StyledPage = styled.div`
  .page {
  }
`;

const query = gql`
    query {
    countries {
      code
      name
    }
  }
`

export async function getStaticProps() {
  const data = await request('https://countries.trevorblades.com/', query);
  const {countries} = data

  return {
    props: {
      countries
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
