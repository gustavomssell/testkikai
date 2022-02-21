import React from 'react'
import Card from '../../Components/Card';
import useAxios from '../../Components/utils/useAxios'
import { Circles } from  'react-loader-spinner'
import { GET_STARSHIPS } from '../../services/options'
import { Title, Wrapper, StyledButton } from './styles';
import {ShowStarships} from "./ShowStartships"
import { ThemeContext } from 'styled-components';

export const Starships = () => {
  const { colors } = React.useContext(ThemeContext);
  const { request, loading } = useAxios()
  const [data, setData] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const [open, setOpen] = React.useState({active: false, url: null})

  const getData = async(currentPage)=>{ 
     await request(GET_STARSHIPS(currentPage)).then(r=>setData(r.data)) 
  }

  React.useEffect(()=>{
    getData(page)
   },[page])

  return (
  <div>
   <ShowStarships open={open.active} setOpen={setOpen} url={open.url}/>
   <Title>Starships</Title>
   <div style={{textAlign: "center"}}>
     <StyledButton onClick={()=>setPage(prev=> prev - 1)} disabled={!data?.previous || loading}> {'<' }</StyledButton> 
     <StyledButton onClick={()=>setPage(prev=> prev + 1)} disabled={!data?.next || loading}> {'>' } </StyledButton>
   </div>

   <div style={{justifyContent: "center", display: "flex", visibility:!loading ?'hidden':'visible', paddingTop: "0.5rem"}}>
    <Circles color={colors.primary} height={25} width={25}/> 
   </div>
   <Wrapper>
     {data && data.results.map((value)=>{
      return <Card 
              Image={() => <img alt="bees" src="/img/starships.png" />}
              key={value.name}
              title={value.name} 
              onClick={()=> setOpen({active: true, url:value.url})}
              />
     })}

  </Wrapper>
  </div> 
  )
}
