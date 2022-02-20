import styled from 'styled-components';

export const Box = styled.div`
  align-items:  center;
  display: flex;
 
  margin: 5%;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const Container = styled.div`
  width: 80%;
  height:  80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 50px;
  }
`

export const SupporterBox = styled.ul`
  align-items:  start;
  display: grid;
  gap:6px;
  margin: 1rem 0px;
  padding: 0px 1rem;
  justify-content: center;
  overflow: auto;
  max-height: 400px;
  min-width: 400px;
`

export const SupporterItem = styled.li`
  padding: 1rem;
  width: 350px;
  list-style:none;
  background: ${props => props.theme.colors.primary};
  border-radius: 20px;
  border: 1;
  cursor: pointer;
  p{
   font-size: 0.8rem;
   font-weight: bold;
   color: #222;
   padding: 0.1rem 0px
  }
`
