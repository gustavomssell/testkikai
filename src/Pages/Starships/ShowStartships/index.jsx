import React from 'react'
import { Modal } from '../../../Components/Modal'
import api from '../../../services/api';
import { GET_JSON } from '../../../services/options';
import { Box, ListBox, ListItem, Text } from './styles'

export const ShowStarships = ({open, setOpen, url}) => {
  const [starships, setStarships] = React.useState(null);
  const [loading, setLoading] = React.useState(true)
 
  const onClose =()=>{
    setOpen({active: false, url:null})
  }

  const getData= async()=>{
    const {data} = await api(GET_JSON(url));
    setStarships({...data, films:[]})
 
    const promsFilms = data.films.map((value)=> api.get(value))
    Promise.all(promsFilms).then((values)=> {
     const data = values;
     const aux = data.map(({data})=> data.title)
     setStarships(prev=>{
       return {...prev, films: aux}
     })
    });
    setLoading(false)
   }

   React.useEffect(()=>{
    if(open) {
      getData()
    } else {
      setStarships(null)
    }

   
   },[open])

  return (
    <>
  {starships && !loading &&
   <Modal openModal={open} onClose={onClose} title={starships?.name}>

    <Box>
      <Text>{`Model: ${starships.model}`}</Text>
      <Text>{`Manufacturer: ${starships.manufacturer}`}</Text>
      <Text>{`Cost in credits: ${starships.cost_in_credits}`}</Text>
      <Text>{`Length: ${starships.length}`}</Text>
      <Text>{`Crew: ${starships.crew}`}</Text>
      <Text>{`Passengers: ${starships.passengers}`}</Text>
      <Text>{`Cargo capacity: ${starships.cargo_capacity}`}</Text>
      <Text>{`Consumables: ${starships.consumables}`}</Text>
      <Text>{`Hyperdrive rating: ${starships.hyperdrive_rating}`}</Text>
      <Text>{`MGLT: ${starships.MGLT}`}</Text>
      <Text>{`Starship class: ${starships.starship_class}`}</Text>
      <ListBox>
        <p>Films: </p>
        {starships.films.map((value)=> {
          return <ListItem>
                 {value}
                 </ListItem>})}
      </ListBox>
    </Box>
   </Modal>}
   </>
  )
}

 