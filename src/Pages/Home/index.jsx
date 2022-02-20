import React from 'react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
 
import Card from '../../Components/Card';
 
import { SupporterContext } from '../../Context/SupporterContext';
import { Col, Container, Row } from '../../styles/grid';
import { ModalCreateSupporter } from './CreateSupporter';
import { ModalEditSupporter } from './EditSupporter';
import { SupporterBox, SupporterItem } from './styles';

const Title = styled.p`
 text-align: center;
 font-size: 2rem;
 font-family: 'Star Jedi';
 color: ${props => props.theme.colors.secondary};
`;

const Box = styled(Row)`
 justify-Content: center;
`;

const StyledButton = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  border: 1;
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 600;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 0px 5px 1px #ccc;
  cursor: pointer;
`;

 
export const Home = () => {
 const [open, setOpen] = React.useState(false);
 const [openEdit, setOpenEdit] = React.useState({active: false, id: null});
 const {supporter} = useContext(SupporterContext)
 const navigate = useNavigate();
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
    <Col style={{display: 'grid', gap: "1rem"}}>
      <StyledButton onClick={()=> setOpen(true)}> Be a collaborator </StyledButton>
      
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
