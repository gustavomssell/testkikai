import React  from 'react';
import { useNavigate } from "react-router-dom";
import Switch from 'react-switch';
import { ThemeContext  } from 'styled-components';
import styled from 'styled-components';
import { Container } from './styles';

const Title = styled.p`
 cursor: pointer;
 padding: 0.1rem 1.0rem;
 border-radius: 15px;
 border: 2;
 font-size: 2rem;
 font-family: 'Star Jedi';
 color: ${props => props.theme.colors.secondary};
 box-shadow: 2px 1px 6px 4px #FFF;
`

const Header  = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const { colors, title } = React.useContext(ThemeContext);

  return (
    <Container>
     <Title onClick={()=>navigate('/')} >Star Wars</Title> 
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;