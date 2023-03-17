import React, { useState, Component } from "react";
// import { Carousel } from "react-circular-carousel";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import AliceCarousel from "./Carousel";
import "./ClubDetail.css";
// import "react-circular-carousel/dist/index.css";

function ClubDetail(props) {
  let { id } = useParams();
  const history = useHistory();

  console.log(props.clubs[3]); //동아리 이름
  function toHome() {
    history.replace("/club");
    window.location.reload();
  }
  return (
    <Container>
      <HomeButton onClick={toHome}>home</HomeButton>
      <div style={{ float: "left", width: "40%" }}>
        <div className="content">
          <Title className="title">{props.clubs[id]}</Title>
            <a href={props.clubsLink[id]} target='_blank'>
              <img src={process.env.PUBLIC_URL + `/public_assets/linkicon.png`} style={{width: '40px', height: '40px', filter: 'opacity(1) drop-shadow(0 0 0 #ffffff);'}}/>
            </a>
          <Content className="inner-content">{props.clubsContent[id]}</Content>
        </div>
      </div>
      {/* <Carousel height={500} width={300} spacing={10} gab={50} offset={50}>
        {imagesArray.map((a, i) => (
          <Img src={process.env.PUBLIC_URL + `/public_assets/${id}/${i}.jpg`} />
        ))}
      </Carousel> */}
      <div className="carousel-container">
        <AliceCarousel id={id} />
      </div>
    </Container>
  );
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 1000px;
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
  font-size: 4.5vw;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  margin: 0 0 5rem 0;
  white-space: pre-wrap; //\n 줄바꿈 개행이 먹도록 추가함.
`;
const Content = styled.p`
  //동아리 설명
  width: 40vw;
  font-size: 1.5vw;
  color: white;
  letter-spacing: 0.1rem;
  white-space: pre-wrap; //\n 줄바꿈 개행이 먹도록 추가함.
  text-overflow: ellipsis;
  word-break:break-all;
`;
const Img = styled.img`
  width: 15px;
  height: 15px;
`;

export default ClubDetail;
