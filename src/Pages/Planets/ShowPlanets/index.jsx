import React from 'react'
import { Modal } from '../../../Components/Modal'
import { Box, Text } from './styles'

export const ShowPlanets = ({open, setOpen, data}) => {
  const onClose =()=>{
    setOpen({active: false, data:null})
  }
  return (
   <Modal openModal={open} onClose={onClose} title={data?.name}>
    {data && 
    <Box>
      <Text>{`Rotation period: ${data.rotation_period}`}</Text>
      <Text>{`Orbital period: ${data.orbital_period}`}</Text>
      <Text>{`Diameter: ${data.diameter}`}</Text>
      <Text>{`Climate: ${data.climate}`}</Text>
      <Text>{`Gravity: ${data.gravity}`}</Text>
      <Text>{`Terrain: ${data.terrain}`}</Text>
      <Text>{`Surface water: ${data.surface_water}`}</Text>
      <Text>{`Population: ${data.population}`}</Text>
    </Box>}
   </Modal>
  )
}

 