import React from "react";
import { Container } from "semantic-ui-react";

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em"}} id="mobileContainer">{children}</Container>
);

export default NavBarChildren;

