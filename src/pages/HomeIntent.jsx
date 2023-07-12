import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

function HomeIntent(props) {
  const navigate = useNavigate();

  const sliderItems = [
    { path: "/" },
    { path: "/club" },
    { path: "/schoolevent" },
    { path: "/about" },
    { path: "/" },
  ];

  const handleSliderItemClick = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Text>MIRIM 학생회</Text>

      <SliderContainer>
        {sliderItems.map((item, index) => (
          <SliderItem
            key={index}
            data-index={index}
            onClick={() => handleSliderItemClick(item.path)}
          >
            <Item index={index} />
          </SliderItem>
        ))}
      </SliderContainer>

      <Circle className="circle"></Circle>
    </Container>
  );
}

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;

  @media screen and (max-width: 900px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 30%;
    grid-template-rows: repeat(5, 200px);
    margin-left: 20%;
    gap: 20px;
  }
`;

const SliderItem = styled.div`
  width: 15%;
  height: 65%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.sliderItemTextColor};
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
  font-size: 18px;
  transition: opacity 0.3s;
  opacity: 1;
  cursor: grab;

  &.active {
    background-color: ${({ theme }) => theme.sliderItemActiveBackgroundColor};
  }
  &:first-child {
    transform: translate(-60%, 60%) rotate(-35deg);
    @media screen and (max-width: 900px) {
      width: 200%;
      height: 100%;
      display: block;
      transform: translate(-60%, 60%) rotate(0deg);
    }
  }
  &:nth-child(2) {
    transform: translate(-35%, 15%) rotate(-15deg);
    @media screen and (max-width: 900px) {
      width: 200%;
      height: 100%;
      display: block;
      transform: translate(-60%, 60%) rotate(0deg);
    }
  }
  &:nth-child(3) {
    transform: translate(0%, 0%) rotate(0deg);
    @media screen and (max-width: 900px) {
      width: 200%;
      height: 100%;
      display: block;
      transform: translate(-60%, 60%) rotate(0deg);
    }
  }
  &:nth-child(4) {
    transform: translate(35%, 15%) rotate(15deg);
    @media screen and (max-width: 900px) {
      width: 200%;
      height: 100%;
      display: block;
      transform: translate(-60%, 60%) rotate(0deg);
    }
  }
  &:nth-child(5) {
    transform: translate(60%, 60%) rotate(35deg);
    @media screen and (max-width: 900px) {
      width: 200%;
      height: 100%;
      display: block;
      transform: translate(-60%, 60%) rotate(0deg);
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  background-color: #161616;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100vh;
    margin-bottom: 200px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 3.2vw;
  text-align: center;
  margin-top: 7vw;
  letter-spacing: 2rem;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgb(255, 255, 255);
  border-radius: 100rem;
  position: absolute;
  top: 48rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default HomeIntent;
