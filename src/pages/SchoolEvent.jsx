import React, { useState } from "react";
import { Carousel } from "react-circular-carousel";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import image from "../img/first.png";
import image2 from "../img/about.png";

function SchoolEvent(props) {
  const history = useHistory();

  let images = [image, image2];

  function handler2() {
    history.replace("/");
    window.location.reload();
  }

  return (
    <LeftContainer>
      <HomeButton onClick={handler2}>Home</HomeButton>
      <TitleText>행사 이름</TitleText>
      <ContextText>학교 행사 설명을 합니다.</ContextText>
      <RightSideBar className="rightBar">
        {/* 모달. map사용. 배열에 사진링크 넣고 삽입. */}
        <Modal images={images} />
      </RightSideBar>
    </LeftContainer>
  );
}

const RightSideBar = styled.div`
  float: left;
  width: 47.2%;
  height: 100%;
  overflow: scroll;
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
const LeftContainer = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #f3f3f3;
  overflow: hidden;
`;
const RightContainer = styled.div`
  /* height: 50.5rem; */
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  top: 0;
  background-color: #f3f3f3;
  /* padding: 4rem; */
`;
const Circle = styled.div`
  width: 40vw;
  height: 40vw;
  background-color: #000000;
  border-radius: 50rem;
  position: absolute;
  top: 5rem;
  right: -30rem;
`;
const BorderCircle = styled.div`
  width: 45vw;
  height: 45vw;
  background-color: #f3f3f3;
  border: 2px solid rgb(0, 0, 0);
  position: absolute;
  top: 2rem;
  right: -33rem;
  border-radius: 50rem;
`;
const Img = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
`;
const TitleText = styled.div`
  color: #000000;
  font-size: 3.2vw;
  text-align: left;
  margin-top: 10vw;
  margin-left: 5vw;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
`;
const ContextText = styled.div`
  color: #000000;
  font-size: 1wv;
  text-align: left;
  margin-top: 3vw;
  margin-left: 5vw;
  font-family: "Noto Sans KR", sans-serif;
`;

function Modal(props) {
  return (
    <RightContainer>
      <Carousel height={500} width={300} spacing={10} gab={50} offset={50}>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
      </Carousel>
    </RightContainer>
  );
}

export default SchoolEvent;
