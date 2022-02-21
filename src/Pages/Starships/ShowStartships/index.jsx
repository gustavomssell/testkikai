import React from 'react'
import { Modal } from '../../../Components/Modal'
import { Box, Text } from './styles'

export const ShowStarships = ({open, setOpen, data}) => {
  const onClose =()=>{
    setOpen({active: false, data:null})
  }
  return (
   <Modal openModal={open} onClose={onClose} title={data?.name}>
    {data && 
    <Box>
      <Text>{`Model: ${data.model}`}</Text>
      <Text>{`Manufacturer: ${data.manufacturer}`}</Text>
      <Text>{`Cost in credits: ${data.cost_in_credits}`}</Text>
      <Text>{`Length: ${data.length}`}</Text>
      <Text>{`Crew: ${data.crew}`}</Text>
      <Text>{`Passengers: ${data.passengers}`}</Text>
      <Text>{`Cargo capacity: ${data.cargo_capacity}`}</Text>
      <Text>{`Consumables: ${data.consumables}`}</Text>
      <Text>{`Hyperdrive rating: ${data.hyperdrive_rating}`}</Text>
      <Text>{`MGLT: ${data.MGLT}`}</Text>
      <Text>{`Starship class: ${data.starship_class}`}</Text>
    </Box>}
   </Modal>
  )
}

 