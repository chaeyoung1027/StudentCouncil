import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import image0 from "../img/group/0.jpg";
import image1 from "../img/group/1.jpg";
import image2 from "../img/group/2.jpg";
import image3 from "../img/group/3.jpg";
import image4 from "../img/group/4.jpg";
import image5 from "../img/group/5.jpg";
import image6 from "../img/group/6.jpg";
import image7 from "../img/group/7.jpg";
import image8 from "../img/group/8.jpg";

function Club(props) {
  const history = useHistory();

  let images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
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
            미림마이스터고만의 자유로운 전공 동아리입니다. 총{" "}
            {props.clubs.length}개의 동아리가 있고,
            <br />각 동아리들은 정해진 날에 모여 활동합니다.
            <br />
            선후배, 각 학과 간의친목을 도모할 수 있는 자리입니다.
          </Content>
        </Writing>
      </div>
      <RightSideBar className="rightBar">
        {/* 모달. map사용. 배열에 사진링크 넣고 삽입. */}
        <Modal clubs={props.clubs} images={images} />
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
    history.replace(`club/detail/${key}`);
    window.location.reload();
  }

  return (
    <>
      {props.clubs.map(function (a, i) {
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
                  {props.clubs[i]}
                </ContentBox>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <ContentBox onClick={() => toDetailPage(i)}>
                  {props.clubs[i]}
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
export default Club;
