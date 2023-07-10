import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import image0 from "../img/schoolevent_group/0.jpg";
import image1 from "../img/schoolevent_group/1.jpeg";
import image2 from "../img/schoolevent_group/2.jpg";
import image3 from "../img/schoolevent_group/3.jpg";
import image4 from "../img/schoolevent_group/4.png";
import image5 from "../img/schoolevent_group/5.jpeg";
import image6 from "../img/schoolevent_group/6.jpeg";
import image7 from "../img/schoolevent_group/7.JPG";

function SchoolEvent(props) {
  const history = useHistory();

  let images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ];

  function handler2() {
    history.replace("./homeintent");
    window.location.reload();
  }
  return (
    <Container className="body">
      <HomeButton onClick={handler2}>home</HomeButton>
      <div style={{ float: "left" }}>
        <Writing>
          <Title>MIRIM SOCIETY</Title>
          <Content>
            32기 학생회의 이벤트 목록입니다. 
            <br/> 총{" "}
            {props.schoolevents.length}개의 이벤트를
            <br />기획하고 주최하였습니다.
          </Content>
        </Writing>
      </div>
      <RightSideBar className="rightBar">
        {/* 모달. map사용. 배열에 사진링크 넣고 삽입. */}
        <Modal schoolevents={props.schoolevents} images={images} />
      </RightSideBar>
    </Container>
  );
}
const Container = styled.div`
  /* height: 50.5rem; */
  width: 100vw;
  height: 100%;
  // overflow: hidden;
  top: 0;
  background-color: #f3f3f3;
  /* padding: 4rem; */
  @media screen and (max-width: 1776px) {
    overflow: hidden;
  }
`;
const RightSideBar = styled.div`
  float: left;
  height: 100%;
  overflow: scroll;
  @media screen and (max-width: 1776px) {
    margin-left: 5vw;
  }
  @media screen and (max-width: 950px) {
    margin-left: 0;
  }
`;
const HomeButton = styled.button`
  cursor: pointer;
  padding: 0.4rem 1rem;
  background-color: #eaeaea;
  color: black;
  border: none;
  float: left;
  border-radius: 0.3rem;
  margin: 1.5rem;
`;
const Writing = styled.div`
  padding: 16rem 0;
  margin-right: 2rem;
  @media screen and (max-width: 1060px) {
    padding: 16rem 2rem;
    margin: 0;
  }
`;
const Title = styled.p`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #475467;
`;
const Content = styled.p`
  font-size: 30px;
  color: #475467;
`;
const ImageBoxAnchor = styled.a`
  display: block;
  overflow: hidden;
`;
const ImageBox = styled.div`
  width: 360px;
  height: 300px;
  background-color: black;
  border: 0.5px black solid;
  background-size: cover; //이미지 꽉차게
  background-position: center; //이미지 가운데 정렬
  transition: 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media screen and (max-width: 950px) {
    width: 50vw;
    height: 45vw;
  }
`;
const ContentBox = styled.div`
  width: 360px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px black solid;
  @media screen and (max-width: 950px) {
    width: 50vw;
    height: 45vw;
  }
`;
function Modal(props) {
  const history = useHistory();

  function toDetailPage(key) {
    //ClubDetail페이지로 이동함
    history.replace(`schoolevent/detail/${key}`);
    window.location.reload();
  }

  return (
    <>
      {props.schoolevents.map(function (a, i) {
        return (
          <>
            {i % 2 === 1 ? (
              <div style={{ display: "flex" }}>
                <ImageBoxAnchor>
                  <ImageBox
                    className="ImageBox"
                    style={{ backgroundImage: `url(${props.images[i]})` }}
                    onClick={() => toDetailPage(i)}
                  />
                </ImageBoxAnchor>
                <ContentBox onClick={() => toDetailPage(i)}>
                  {props.schoolevents[i]}
                </ContentBox>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <ContentBox onClick={() => toDetailPage(i)}>
                  {props.schoolevents[i]}
                </ContentBox>
                <ImageBoxAnchor>
                  <ImageBox
                    className="ImageBox"
                    style={{ backgroundImage: `url(${props.images[i]})` }}
                    onClick={() => toDetailPage(i)}
                  />
                </ImageBoxAnchor>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
export default SchoolEvent;
