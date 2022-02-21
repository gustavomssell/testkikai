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

export const Title = styled.p`
 cursor: pointer;
 padding: 0.1rem 1.0rem;
 border-radius: 15px;
 border: 2;
 font-size: 2rem;
 font-family: 'Star Jedi';
 color: ${props => props.theme.colors.secondary};
 box-shadow: 2px 1px 6px 4px #FFF;
`