import React from 'react'
import { useContext } from 'react';
import Card from '../../Components/Card';
import useAxios from '../../Components/utils/useAxios'
import { SupporterContext } from '../../Context/SupporterContext';
import { GET_STARSHIPS } from '../../services/options'
import { Col, Row, Container } from '../../styles/grid';
import { Title, Wrapper } from './styles';

const LIMIT = 10;

export const Starships = () => {
  const {request, buffer} = useAxios()
  const {CreateSupporter} = useContext(SupporterContext)
  const [select, setSelect] = React.useState(null)
  const [data, setData] = React.useState(null)
  const [page, setPage] = React.useState(1);
  const [max, setMax] = React.useState(null)  

  const getData =()=>{
     request(GET_STARSHIPS(1)).then(r=> setData(r.data.results))
  }


  React.useEffect(()=>{
   getData()
  }
  ,[])
  return (
  <div>
    <div>
      <Title>Starships</Title>
    </div>
 
   <Wrapper>
   <Card  />
   <Card  />
   <Card  />

   <Card  />
   <Card  />
   <Card  />

   <Card  />
   <Card  />
   <Card  />

   <Card  />

 
     {data !== null && data.map((value)=>{
      return <Card 
              Image={() => <img alt="bees" src="/img/starships.png" />}
              key={value.name}
              title={value.name} 
              model={value.model}
              manufacturer={value.manufacturer}
              onClick={()=> CreateSupporter(value)}
              />
     })}

  </Wrapper>
  </div> 
  )
}
