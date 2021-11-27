import Link from 'next/link';
import Img from 'next/image';
import styled from 'styled-components';
import { SharedUiComponents } from '@football-project/shared-ui-components';
import Countries from '../components/country/countries/countries';
import { IndexProps } from '@football-project/types';
import axios from 'axios'
import CountriesSpecs from '../components/countries-specs/countries-specs';
import { useState } from 'react';
import Image from 'next/image';

const StyledPage = styled.div`
  .page {
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://api-football-beta.p.rapidapi.com/countries'
  
  const config = {
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': '6875e55e4emshf30978298cd6d99p1e7596jsn49d25891a38a'
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
  const [pages, setPages] = useState([]);
  //const [pageIndex, setPageIndex] = useState(0);
  
  let pageIndex=pages.length-1
  console.log("PAGE INDEX", pageIndex);
  console.log("pages lenght", pages);
  
  const handleItemClick0=({id, name, logo})=>{
    pageIndex=0
    const config = {
      headers: {
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
        'x-rapidapi-key': '6875e55e4emshf30978298cd6d99p1e7596jsn49d25891a38a'
      }
    }
      axios.get(`https://api-football-beta.p.rapidapi.com/players?season=2020&team=${id}`, config).then((response) => {
        const obj=response.data.response.map(item=>item.player)
        console.log(obj);
        const newPage={
          id:1,
          title:name,
          url: logo,
          itemsList: [...obj]
        }
        console.log("PAGES", [...[...pages].splice(0,1),newPage]);
        
        setPages([...[...pages].splice(0,1),newPage])
      }).catch((error) => {
        console.log("el error::")
        console.log(error);
      })
    console.log("hola")
  }
const handleItemClick1=({firstname,lastname, photo})=>{
  const newPage={
    id:2,
    title:firstname+" "+lastname,
    url: photo,
    itemsList: []
  }
  setPages([...[...pages].splice(0,2), newPage ])
  
}
const pagesOnClickMapper = {
  0: handleItemClick0,
  1: handleItemClick1
}
  return (
    <StyledPage>
      <header>
      <SharedUiComponents title="Uninorte 2021" showTitle />
      </header>
      <div className="pages-container">
      <Countries countries={countries} setPage={setPages}/>
      {pages.length>0 && pages.map( ({id, title, url, itemsList, }, index) => (
        <div className="Conteiner" key={`${index}a`}>
          <h1>{title}</h1>
          <img src={url} alt={`${url}link`}/>
          <ul>
            {
              itemsList.length>0 && itemsList.map( (item) => (
                
                <li key={`${item.name}${index}`} onClick={()=>pagesOnClickMapper[id](item)}>
                  {item.name}
                </li>
              )
              )
            }
          </ul>
        </div>
      )
      )}
      {/* <CountriesSpecs></CountriesSpecs> */}
      {/* 
      <ClubSpecs></ClubsSpecs> */}
      </div>
    </StyledPage>
  );
}

export default Index;
