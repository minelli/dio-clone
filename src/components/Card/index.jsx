import React from "react";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

function Card() {
  return (
    <CardContainer>
      <ImageBackground src="https://neilpatel.com/wp-content/uploads/2017/12/codigos-html-para-paginas-web.jpeg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/7001200?v=4" />
          <div>
            <h4>Marcelo Minelli</h4>
            <p>Hà 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp Dio do Global
            Avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 16
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}

export default Card;
