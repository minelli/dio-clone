import React from "react";
import {
  Column,
  Container,
  DisclaimerText,
  LoginText,
  Row,
  SubtitleRegister,
  Title,
  TitleRegister,
  Wrapper,
} from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { IRegisterFormData } from "./types";

const schema = yup
  .object({
    name: yup.string().min(3).required("Campo Obrigatorio"),
    email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(3, "Senha deve conter no minimo 3 caracteres")
      .required("Campo Obrigatorio"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (formData: IRegisterFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);
      if (data.length > 0) {
        alert("Email já cadastrado");
      } else {
        await api
          .post("/users", {
            name: formData.email,
            email: formData.email,
            password: formData.password,
          })
          .then(function (response) {
            console.log(response);
            alert("Usuario criado com sucesso!");
            navigate("/feed");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
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
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
              Crie sua conta e make the change._
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                errorMessage={errors?.name?.message}
                placeholder="Nome Completo"
                name="name"
                leftIcon={<MdPerson />}
              ></Input>
              <Input
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                name="email"
                leftIcon={<MdEmail />}
              ></Input>
              <Input
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                name="password"
                type="password"
                leftIcon={<MdLock />}
              ></Input>
              <Button
                type="submit"
                title="Criar minha conta"
                variant="secondary"
              ></Button>
            </form>
          </Wrapper>
          <Row>
            <DisclaimerText>
              Ao clicar em "criar minha conta grátis", <br />
              declaro que aceito as Políticas de Privacidade <br />e os Termos
              de Uso da DIO.
            </DisclaimerText>
          </Row>
          <Row>
            <Column>
              <DisclaimerText>Já tenho conta.</DisclaimerText>
            </Column>
            <Column>
              <LoginText>Fazer Login</LoginText>
            </Column>
          </Row>
        </Column>
      </Container>
    </>
  );
};

export default Register;
