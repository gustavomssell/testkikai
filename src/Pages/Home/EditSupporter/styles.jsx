import { Field, Form } from 'formik';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const DeleteButton = styled.button`
  border: none;
  width: 36px;
  height: 36px;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
`;


export const InputText = styled(Field)`
  cursor: pointer;
  width: 250px;
  height: 35px;
  border-radius: 10px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #CCC;
  }
`;

export const InputMaskText = styled(InputMask)`
  cursor: pointer;
  width: 250px;
  height: 35px;
  border-radius: 10px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #CCC;
  }
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  border: 1;
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 600;
  height: 48px;
  padding: 0 2rem;
  cursor: pointer;
`;

export const FormBox = styled(Form)`
  width: 100%;
  padding: 1rem;
  display: grid; 
  gap: 0.5rem; 
  justify-Content: center;
`;
