import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import image0 from "../../img/group/0.jpg";
import image1 from "../../img/group/1.jpg";
import image2 from "../../img/group/2.jpg";
import image3 from "../../img/group/3.jpg";
import image4 from "../../img/group/4.jpg";
import image5 from "../../img/group/5.jpg";
import image6 from "../../img/group/6.jpg";
import image7 from "../../img/group/7.jpg";
import image8 from "../../img/group/8.jpg";

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
    history.replace("/");
    window.location.reload();
  }
  return (
    <Container className="body">
      <HomeButton onClick={handler2}>home</HomeButton>
      <div style={{ float: "left" }}>
        <div style={{ padding: "16rem 0", marginRight: "5rem" }}>
          <Title>MIRIM SOCIETY</Title>
          <Content>
            미림마이스터고만의 자유로운 전공 동아리입니다. 총{" "}
            {props.clubs.length}개의 동아리가 있고,
            <br />각 동아리들은 정해진 날에 모여 활동합니다.
            <br />
            선후배, 각 학과 간의친목을 도모할 수 있는 자리입니다.
          </Content>
        </div>
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
  height: 100vh;
  // overflow: hidden;
  top: 0;
  background-color: #f3f3f3;
  /* padding: 4rem; */
`;
const RightSideBar = styled.div`
  float: left;
  width: 47.2%;
  height: 100%;
  overflow: scroll;
`;
const HomeButton = styled.button`
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
  float: left;
`;
const Title = styled.p`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #475467;
`;
const Content = styled.p`
  font-size: 26px;
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
`;
const ContentBox = styled.div`
  width: 360px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px black solid;
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
