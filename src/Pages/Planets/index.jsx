import React from 'react'
import { useContext } from 'react';
import Card from '../../Components/Card';
import useAxios from '../../Components/utils/useAxios'
import { SupporterContext } from '../../Context/SupporterContext';
import { GET_STARSHIPS } from '../../services/options'
import { Col, Row, Container } from '../../styles/grid';
import { Title, Wrapper } from './styles';
import {ShowPlanets} from "./ShowPlanets"
import mock from "./mock"

const LIMIT = 10;

export const Planets = () => {
  const {request, buffer} = useAxios()
  const {CreateSupporter} = useContext(SupporterContext)
  const [open, setOpen] = React.useState({active: false, data: null})
  const [data, setData] = React.useState(null)
  const [page, setPage] = React.useState(1);
  const [max, setMax] = React.useState(null)  

  const getData =()=>{
    // request(GET_STARSHIPS(1)).then(r=> setData(r.data.results))
    setData(mock.results)
  }

  React.useEffect(()=>{
   getData()
  },[])

  return (
  <div>
  <ShowPlanets open={open.active} setOpen={setOpen} data={open.data}/>
  <Title>Planets</Title>
   <Wrapper>
     {data !== null && data.map((value)=>{
      return <Card 
              Image={() => <img alt="bees" src="/img/planets.png" />}
              key={value.name}
              title={value.name} 
              onClick={()=> setOpen({active: true, data:value})}
              />
     })}
  </Wrapper>
  </div> 
  )
}
