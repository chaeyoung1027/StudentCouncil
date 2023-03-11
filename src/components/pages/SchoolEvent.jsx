import React, { useState } from "react";
import { Carousel } from 'react-circular-carousel'
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import image from '../../img/first.png';

function SchoolEvent(props) {

    const history = useHistory();

    let [행사, 행사명] = useState([
      "느린 우체통",
      "학생회 소통망 이벤트",
      "롤링페이퍼",
      "CA 발표회",
      "국군위문병",
      "체육대회",
      "학교 폭력/흡연 예방/선플/안전사고 예방 캠페인",
    ]);

    function handler2() {
        history.replace("/");
        window.location.reload();
    }
  return (
    <Container>
      <HomeButton onClick={handler2}>Home</HomeButton>
      <TitleText>행사 이름</TitleText>
      <ContextText>동아리 설명을 합니다.</ContextText>
      <Carousel height={320} width={120} spacing={500} gab={20} offset={36} >
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
        <Img src={image}></Img>
      </Carousel>
      <BorderCircle />
      <Circle />  
     </Container>
  );
}

const HomeButton = styled.button`
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
  float: left;
`;
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #f3f3f3;
  overflow: hidden;
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
    font-family: 'Noto Sans KR', sans-serif; 
`;
const ContextText = styled.div`
    color: #000000;
    font-size: 1wv;
    text-align: left;
    margin-top: 3vw;
    margin-left: 5vw;
    font-family: 'Noto Sans KR', sans-serif;
`;

export default SchoolEvent;
