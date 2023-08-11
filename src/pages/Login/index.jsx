import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
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
import { api } from "../../services/api";

const schema = yup
  .object({
    email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(3, "Senha deve conter no minimo 3 caracteres")
      .required("Campo Obrigatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&password=${formData.password}`
      );
      if (data.length > 0) {
        navigate("/feed");
      } else {
        alert("Nenhum usuario encontrado");
      }
      console.log("retorno api: ", data);
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                errorMessage={errors?.email?.message}
                name="email"
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                control={control}
                errorMessage={errors?.password?.message}
                name="password"
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button type="submit" title="Entrar" variant="secondary"></Button>
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
