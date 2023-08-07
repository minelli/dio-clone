import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

import { MdEmail, MdLock } from "react-icons/md";
const Login = () => {
  const navigate = useNavigate();
  const HandleClickLogin = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologiase entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                type="button"
                title="Entrar"
                variant="secondary"
                onClick={HandleClickLogin}
              ></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar minha conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
