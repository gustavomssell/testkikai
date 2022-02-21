import React from "react";
import { StyledCard } from "./styles";
 

const Card = ({ title, Image, excerpt, model, manufacturer, ...props }) => (
  <StyledCard {...props}>
    <Image />
    <header style={{textAlign: "center"}}>
      <h1>{title}</h1>
    </header>
    <section>
      <p>{excerpt}</p>
    </section>
    <footer>
      <div style={{display: "grid"}}>
     {model && <p>
          <small>Model {model}</small>
        </p>}
  {manufacturer && <p>
          <small>Manufacturer: {manufacturer}</small>
        </p>}
      </div>
    </footer>
   
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
