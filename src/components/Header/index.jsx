import React from "react";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles";
import Button from "../Button";
import logo from "../../assets/logo-dio.png";

function Header({ title, variant = "primary", onClick }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo"></img>
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;
