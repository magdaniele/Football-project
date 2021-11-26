import styled from 'styled-components';
import { useCountries } from '../useCountries';
import { IndexProps } from '@football-project/types';
import Link from 'next/link';

const StyledCountries = styled.div`
  color: Black;
`;

export function Countries(props: IndexProps) {
  const [ countriesArray ] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;
  return (
    <StyledCountries>
      <h1>Countries</h1>
      {
        countries && countries.length > 0 
        ?
        
        countries.map(({code, name}) => code? <div key={code}><Link  href={`/${name}`} >{code}</Link><br/><br/></div>: "")
        :
        <p>no data</p>
      }
    </StyledCountries>
  );
}

export default Countries;