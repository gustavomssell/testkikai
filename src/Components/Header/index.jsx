import React  from 'react';
import { useNavigate } from "react-router-dom";
import Switch from 'react-switch';
import { ThemeContext  } from 'styled-components';
import { Container, Title } from './styles';

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