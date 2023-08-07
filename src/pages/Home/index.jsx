import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

import banner from "../../assets/banner.png";
const Home = () => {
  const navigate = useNavigate();
  const HandleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar"
            variant="secondary"
            onClick={HandleClickSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </Container>
    </>
  );
};

export default Home;
