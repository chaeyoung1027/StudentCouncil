import React, {useState,Component } from 'react';
import { Carousel } from 'react-circular-carousel'
import styled from 'styled-components';
import image from '../../img/first.png';
import { useHistory } from "react-router-dom";
function HomeIntent(props) {
    return (
        <Container>
            <Text>TEXTINPUT</Text>
                <Carousel height={320} width={120} spacing={500} gab={20} offset={36} >
                    <Img src={image}></Img>
                    <Img src={image}></Img>
                    <Img src={image}></Img>
                    <Img src={image}></Img>
                    <Img src={image}></Img>
                </Carousel>
                <Circle></Circle>
        </Container>
        
    )
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #161616;
  overflow: hidden;
`;
const Text = styled.div`
    color: #FFFFFF;
    font-size: 3.2vw;
    text-align: center;
    margin-top: 10vw;
    letter-spacing: 4rem;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif; 
`;
const Img = styled.img`
    widht: 100%;
    height: 100%;
    object-fit: cover;`;
const Circle = styled.div`
  width: 55vw;
  height: 55vw;
  background-color: #f3f3f3;
  border-radius: 50rem;
  position: absolute;
  top: 43rem;
  left: 27rem;
`;
export default HomeIntent;