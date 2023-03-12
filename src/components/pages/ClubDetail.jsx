import React, { useState, Component } from "react";
import { Carousel } from "react-circular-carousel";
import styled from "styled-components";
import image from "../../img/first.png";
import { useHistory, useParams } from "react-router-dom";

function ClubExpl(props) {
  let { id } = useParams();
  console.log(id);
  const history = useHistory();

  function toHome() {
    history.replace("/");
    window.location.reload();
  }

  return (
    <Container>
      <HomeButton onClick={toHome}>home</HomeButton>
      <div style={{ float: "left" }}>
        <div style={{ padding: "12rem 0", marginRight: "5rem" }}>
          <Title>{props.clubs[id]}</Title>
          <Content>
            미림벤처창업반에서는 선배, 친구들과 함께 여러 공모전에 참여합니다.
            동아리 활동을 통해 공모전 참가 경험 및 발표 경험 등을 쌓을 수
            있습니다. 또 다양한 공모전 참여 활동을 통해 문제해결능력 상승에도
            많은 도움이 됩니다. <br />
            <br />
            이러한 과정 속에서 선배, 후배, 친구들과 자연스레 친해져 학창 시절
            속가장 큰 추억으로 동아리 활동이 자리매김합니다.
          </Content>
        </div>
      </div>
      <Carousel height={320} width={120} spacing={500} gab={20} offset={36}>
        <Img src={image} style={{ transform: "rotate(90deg)" }}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
      </Carousel>
    </Container>
  );
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #161616;
`;
const HomeButton = styled.button`
  cursor: pointer;
  padding: 0.4rem 1rem;
  background-color: #f3f3f3;
  opacity: 0.5;
  color: black;
  border: none;
  float: left;
  border-radius: 0.3rem;
  margin: 1.5rem;
`;
const Title = styled.p`
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  margin: 0 0 5rem 0;
`;
const Content = styled.p`
  width: 40rem;
  height: 20rem;
  font-size: 26px;
  color: white;
  letter-spacing: 0.1rem;
`;
const Img = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: cover;
`;
export default ClubExpl;
