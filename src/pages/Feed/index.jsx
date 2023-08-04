import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

import banner from "../../assets/banner.png";
import Card from "../../components/Card";
const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default Feed;
