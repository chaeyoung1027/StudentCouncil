import React, { useState, Component } from "react";
import { Carousel } from "react-circular-carousel";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
// import "react-circular-carousel/dist/index.css";

function ClubDetail(props) {
  let { id } = useParams();
  const history = useHistory();

  console.log(props.clubs[0]); //동아리 이름
  function toHome() {
    history.replace("/");
    window.location.reload();
  }

  return (
    <Container>
      <HomeButton
        onClick={() => {
          history.goBack();
        }}
      >
        home
      </HomeButton>
      <div style={{ float: "left" }}>
        <div style={{ padding: "10rem 0", marginRight: "5rem" }}>
          <Title>{props.clubs[id]}</Title>
          <Content>{props.clubsContent[id]}</Content>
        </div>
      </div>
      <Carousel height={500} width={300} spacing={10} gab={50} offset={50}>
        <Img src={process.env.PUBLIC_URL + "/0/1.png"}></Img>
        <Img src={process.env.PUBLIC_URL + "/0/1.png"}></Img>
        <Img src={process.env.PUBLIC_URL + "/0/1.png"}></Img>
        <Img src={process.env.PUBLIC_URL + "/0/1.png"}></Img>
        <Img src={process.env.PUBLIC_URL + "/0/1.png"}></Img>
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
  // 동아리 이름
  font-size: 5vw;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  margin: 0 0 5rem 0;
  white-space: pre-wrap; //\n 줄바꿈 개행이 먹도록 추가함.
`;
const Content = styled.p`
  //동아리 설명
  width: 40rem;
  height: 20rem;
  font-size: 1.5vw;
  color: white;
  letter-spacing: 0.1rem;
  white-space: pre-wrap; //\n 줄바꿈 개행이 먹도록 추가함.
  text-overflow: ellipsis;
`;
const Img = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: cover;
`;
export default ClubDetail;
