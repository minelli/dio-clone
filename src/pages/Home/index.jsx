import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

import banner from "../../assets/banner.png";
const Home = () => {
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
            Domine as tecnologias utiliadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Comecar" variant="secondary" onClick={() => null} />
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </Container>
    </>
  );
};

export { Home };
