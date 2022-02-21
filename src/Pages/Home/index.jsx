import React from 'react'
import { useNavigate } from "react-router-dom";

import { Col, Container } from '../../styles/grid';
import { SupporterBox, SupporterItem, Box, Title, StyledButton } from './styles';
 
import Card from '../../Components/Card';
import { SupporterContext } from '../../Context/SupporterContext';
import { ModalCreateSupporter } from './CreateSupporter';
import { ModalEditSupporter } from './EditSupporter';

export const Home = () => {
 const navigate = useNavigate();
 const {supporter} = React.useContext(SupporterContext)
 const [open, setOpen] = React.useState(false);
 const [openEdit, setOpenEdit] = React.useState({active: false, id: null});

 return ( 
 <> 
  <ModalCreateSupporter open={open} setOpen={setOpen}/>
  <ModalEditSupporter   open={openEdit.active} setOpen={setOpenEdit} id={openEdit.id}/>
  <Container >
   <Title> About </Title>
    <Box>
     <Col>
      <Card title="Planets"  Image={() => <img alt="bees" src="/img/planets.png" />}  onClick={() => navigate("/planets")}/>
     </Col>
     <Col>
      <Card title="Starships" Image={() => <img alt="bees" src="/img/starships.png" />} onClick={() => navigate("/starships")}/>
     </Col>
    </Box>
    <Box>
    <Col style={{display: 'grid', gap: "0.1rem" }}>
      <div style={{textAlign: "center"}}>
      <StyledButton onClick={()=> setOpen(true)}> Be a collaborator </StyledButton>
      </div>
      <SupporterBox>
      {supporter.map((value, index)=>{
      return <SupporterItem index={index} onClick={()=> setOpenEdit({active: true, id: index})}>
              <p>Name: {value.name}</p>
              <p>E-mail: {value.email}</p>
              <p>Phone: {value.phone}</p>
             </SupporterItem>
     })}
      </SupporterBox>
     </Col>
    </Box> 
  </Container>
  </> 
  )
}
