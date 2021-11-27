import styled from 'styled-components';
import { useCountries } from '../useCountries';
import { IndexProps } from '@football-project/types';
import axios from 'axios';


const StyledCountries = styled.div`
  color: Black;
  height: 100vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
;

export function Countries(props: IndexProps) {
  const [ countriesArray ] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;
  const setPage= props.setPage
  const handleCountryClick=(code: string, name:string, url:string)=>{
    const config = {
      headers: {
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
        'x-rapidapi-key': '544422e956msh41857eaa837a1aap128469jsn881993a8444a'
      }
    }
    axios.get(`https://api-football-beta.p.rapidapi.com/teams?country=${name}`, config).then((response) => {
      console.log("entroooooo: ",response.data.response);
      const obj=response.data.response.map((item)=>item.team)
      console.log(obj)
      const pageConfig={
        id:0,
        title: `${code}-${name}`,      
        url,
        itemsList:[...obj],
      }
      console.log(url);
      
      setPage([pageConfig])

    }).catch((error) => {
      console.log("el error::")
      console.log(error);
    })
    
  }
  return (
    <StyledCountries>
      <h1>Countries</h1>
      {
        countries && countries.length > 0 
        ?
        
        countries.map(({code, name, flag},index) => code? <div className="Countries" onClick={()=>handleCountryClick(code, name, flag)} key={`${index}a`} >{code}<br/><br/></div>: "")
        :
        <p>no data</p>
      }
    </StyledCountries>
  );
}

export default Countries;