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
import { useNavigate } from "react-router-dom";

function Header({ autenticado }) {
  const navigate = useNavigate();
  const HandleClickHome = () => {
    navigate("/");
  };

  const HandleClickRegister = () => {
    navigate("/register");
  };

  const HandleClickLogin = () => {
    navigate("/login");
  };

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
              <MenuRight onClick={HandleClickHome} href="#">
                Home
              </MenuRight>
              <Button onClick={HandleClickLogin} title="Entrar"></Button>
              <Button onClick={HandleClickRegister} title="Cadastrar"></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;
