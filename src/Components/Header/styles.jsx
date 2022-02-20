import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 0px 5px 1px #ccc;
   p{
    font-size: 1.5rem;
    font-family: 'Star Jedi';
    color: ${props => props.theme.colors.secondary};
  }
`;