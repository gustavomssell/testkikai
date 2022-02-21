import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  border: 1;
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 600;
  height: 24px;
  padding: 0 30px;
  cursor: pointer;
`

export const Box = styled.div`
 display: grid;
 padding: 1rem;
`
export const Text = styled.p`
 font-size: 1rem;
 font-weight: 600;
 padding: 5px 0;
 text-align: start;
`

export const ListBox = styled.ul`
  align-items: start;
  display: grid;
  font-weight: bold;
  margin: 0.5rem 0px;
`

export const ListItem = styled.li`
  padding-left: 8px;
  margin: 0.1rem 0px;
  list-style:none;
`