import styled from "styled-components";
import { materialShadow } from "../../styles/shadows";

export const StyledCard = styled.article`
  background: ${props => props.theme.colors.secondary};
  margin: 1em;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  flex-flow: column;
  border-radius: 0.5rem;
  transition: 300ms ease;
  ${materialShadow.base}

  h1 {
    margin-bottom: 0;
    padding: 0.5rem 0;
  }
  img {
    width: 100%;
    height: 50%;
    border-radius: 0.2em;
  }

  > section:after {
    content: " ";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #ccc;
  }

  p {
    max-width: 80%;
    line-height: 1.45em;
    color: #666;
  }

  footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 1em;
    p {
      color: #aaa;
      display: inline;
    }

    a {
      text-decoration: none;
      color: inherit;
      padding: 0 1em;
      color: #444;

      :last-child {
        padding-right: 0;
      }
    }
  }

  &:hover {
    ${materialShadow.hover}
    img {
      filter: grayscale(0) blur(0);
    }
  }
`;
