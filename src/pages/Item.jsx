import React from "react";
import styled from "styled-components";
import img0 from "../img/activityImg/0.png";
import img1 from "../img/group/7.jpg";
import img2 from "../img/activityImg/31.jpeg";
import img4 from "../img/activityImg/3.jpg";
import img3 from "../img/first.png";

const Item = ({ index }) => {
  const images = [img0, img1, img2, img3, img4];

  const ltexts = [
    "",
    "동아리 홍보<br/>전공 동아리 모집",
    "1학년 소규모 테마여행<br/>글로벌 현장학습 멘토링<br/>국제 교류회<br/>2022 동아리 발표회<br/> 현장 실습생 보고회",
    "32기 학생회의<br/>이념과 활동 내용을 알아보세요.",
    "준비중",
  ];

  const rtexts = [
    "준비중",
    "<b>미림 마이스터고<br/>동아리 활동</b><br/>2023년 0 1월 12일 발행",
    "<b>2023<br/>미림에서의 하루</b><br/>2023년 02월 03일 발행",
    "<p>2023</br>학생회의 이야기</p><br/>2023년 07월 14일 발행",
    "준비중",
  ];

  return (
    <Wrapper>
      <Text>
        <Left dangerouslySetInnerHTML={{ __html: ltexts[index] }} />
        <Right dangerouslySetInnerHTML={{ __html: rtexts[index] }} />
      </Text>
      <Image src={images[index]} alt="" />
    </Wrapper>
  );
};

export default Item;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(50%);
  z-index: 1;
`;

const Text = styled.div`
  opacity: 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-left: -70%;
  width: 240%;
  position: absolute;
  top: 40px;
  transition: opacity 0.3s;
  z-index: 99;

  @media screen and (max-width: 900px) {
    width: 180%;
    margin-left: -35%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;

  &:hover {
    ${Text} {
      opacity: 1;
    }
    ${Image} {
      filter: brightness(1);
    }
  }
`;

const Left = styled.div`
  color: #fff;
  line-height: 1.5;
  font-weight: 200;
  text-align: right;
`;

const Right = styled.div`
  color: #fff;
  line-height: 1.5;
  font-weight: 200;
  text-align: left;
`;
