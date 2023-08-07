import Header from "../../components/Header";
import { Column, Container, Title, TitleHighlight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>Ranking Top 5 da semana</TitleHighlight>
          <UserInfo
            nome="Marcelo"
            imagem={"https://avatars.githubusercontent.com/u/7001200?v=4"}
            percentual={90}
          />
          <UserInfo
            nome="Marcelo Romera"
            imagem={"https://avatars.githubusercontent.com/u/7001200?v=4"}
            percentual={78}
          />
          <UserInfo
            nome="Marcelo Minelli"
            imagem={"https://avatars.githubusercontent.com/u/7001200?v=4"}
            percentual={56}
          />
          <UserInfo
            nome="Marcelo R"
            imagem={"https://avatars.githubusercontent.com/u/7001200?v=4"}
            percentual={34}
          />
          <UserInfo
            nome="Marcelo M"
            imagem={"https://avatars.githubusercontent.com/u/7001200?v=4"}
            percentual={12}
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
