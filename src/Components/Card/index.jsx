import React from "react";
import { StyledCard } from "./styles";
 

const Card = ({ title, Image, excerpt,   ...props }) => (
  <StyledCard {...props}>
    <Image />
    <header style={{textAlign: "center"}}>
      <h1>{title}</h1>
    </header>
    <section>
      <p>{excerpt}</p>
    </section>
 
   
  </StyledCard>
);

Card.defaultProps = {
  title: "Example Card Example Card Example Card",
  Image: () => (
    <img alt="planets" src="/img/planets.png" />
  ),
  excerpt: ``,
  shadowDepth: 2,
  shadowHoverDepth: 3
};

export default Card;
