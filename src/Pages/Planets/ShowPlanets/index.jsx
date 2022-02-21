import React from 'react'
import { Modal } from '../../../Components/Modal'
import api from '../../../services/api'
import { GET_JSON } from '../../../services/options'
import { Box, ListBox, ListItem, Text } from './styles'

export const ShowPlanets = ({open, setOpen, url}) => {
  const [planet, setPlanet] = React.useState(null);
  const [loading, setLoading] = React.useState(true)
  const onClose =()=> setOpen({active: false, url:null})
  
  const getData= async()=>{
   const {data} = await api(GET_JSON(url));
   setPlanet({...data, residents: [], films: []})
   const promResidents = data.residents.map((value)=> api.get(value))
   Promise.all(promResidents).then((values)=> {
    const data = values;
    const aux = data.map(({data})=> data.name)
    setPlanet(prev=>{
      return {...prev, residents: aux}
    })
   });
   const promsFilms = data.films.map((value)=> api.get(value))
   Promise.all(promsFilms).then((values)=> {
    const data = values;
    const aux = data.map(({data})=> data.title)
    setPlanet(prev=>{
      return {...prev, films: aux}
    })
   });
   setLoading(false)
  }

  React.useEffect(()=>{
   if(open){
     getData()
    } else
    setPlanet(null)
  },[open])

  return (
   <Modal openModal={open} onClose={onClose} title={planet?.name}>
    {planet && !loading &&
    <Box>
      <Text>{`Rotation period: ${planet.rotation_period}`}</Text>
      <Text>{`Orbital period: ${planet.orbital_period}`}</Text>
      <Text>{`Diameter: ${planet.diameter}`}</Text>
      <Text>{`Climate: ${planet.climate}`}</Text>
      <Text>{`Gravity: ${planet.gravity}`}</Text>
      <Text>{`Terrain: ${planet.terrain}`}</Text>
      <Text>{`Surface water: ${planet.surface_water}`}</Text>
      <Text>{`Population: ${planet.population}`}</Text>
      <ListBox>
        <p>Films: </p>
        {planet.films.map((value)=> {
          return <ListItem>
                 {value}
                 </ListItem>})}
      </ListBox>

      <ListBox>
        <p>Residents: </p>
        {planet.residents.map((value)=> {
          return <ListItem>
                 {value}
                 </ListItem>})}
      </ListBox>
    </Box>}
   </Modal>
  )
}

 