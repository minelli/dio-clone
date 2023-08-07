import React from "react";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import Button from "../Button";
import logo from "../../assets/logo-dio.png";
import UserInfo from "../UserInfo";

function Header({ autenticado }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo"></img>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture
              src={"https://avatars.githubusercontent.com/u/7001200?v=4"}
            />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar"></Button>
              <Button title="Cadastrar"></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;
