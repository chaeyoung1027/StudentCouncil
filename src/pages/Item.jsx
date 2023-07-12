import React from "react";
import styled from "styled-components";
import img0 from "../img/activityImg/0.png";
import img1 from "../img/group/7.jpg";
import img2 from "../img/activityImg/31.jpeg";
import img4 from "../img/activityImg/3.jpg";
import img3 from "../img/first.png";

const Item = ({ index }) => {
  const images = [img0, img1, img2, img3, img4];

  return (
    <Wrapper>
      <Image src={images[index]} alt="" />
    </Wrapper>
  );
};

export default Item;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  filter: brightness(50%);
  width: 100%;
  height: 100%;
  &:hover {
    filter: brightness(1);
  }
`;
