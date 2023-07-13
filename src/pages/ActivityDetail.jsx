//학생회 행사 정리 페이지
import React, { useState, Component } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import AliceCarousel from "./Carousel";
import Dial from "../img/Dial.png";
import "./ActivityDetail.css";

function ClubDetail(props) {
  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <HomeButton onClick={()=>{navigate('/schoolevent')}}>home</HomeButton>

      <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#F3F3F3",
      }}
    >
      <div className="explain">
        <div className="expTitle">{props.activity[id]}</div>
        <div className="exp">
        {props.actexp[id]}
        </div>
      </div>
      <img src={Dial} alt="다이얼" className="dial" />
    </div>

    </Container>
  );
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 1000px;
  background-color: #F3F3F3;
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
