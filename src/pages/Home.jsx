import React, { useState } from "react";
import styled from "styled-components";
import image from "../img/mainpage.png";
import imagecircle from "../img/circle.png";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [width, setWidth] = useState("43vw");
  const [height, setHeight] = useState("43vw");
  const [marginTop, setMarginTop] = useState("-53vw");
  const [color, setColor] = useState("#F5F8FF");
  const navigate = useNavigate();

  return (
    <Container>
      <Img src={image}></Img>
      <Img2
        src={imagecircle}
        className="img2"
        style={{ width, height, marginTop }}
        onClick={() => {
          setWidth("90vw");
          setHeight("90vw");
          setMarginTop("-90vw");
          setColor("#000");
          setTimeout(() => {
            navigate('/homeintent');
          }, 1250);
        }}
      ></Img2>
      <Text style={{ color }}>MIRIM ALBUM</Text>
    </Container>
  );
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #161616;
`;
const Img = styled.img`
  margin: 0 auto;
  width: 63vw;
  display: flex;
  justify-content: center;
  margin-top: -3vw;
  @media only screen and (max-width: 604px) {
    width: 83%;
    height: 36%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: 78% auto 0px;
  }
`;
const Img2 = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  transition: all ease 2s 0s;
  @media only screen and (max-width: 604px) {
    margin-top: -64vw !important;
    width: 68vw;
    height: 68vw;
  }
`;
const Text = styled.div`
  font-size: 4.5vw;
  letter-spacing: 0.65rem;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: -25vw;
  transition: all ease 2s 0s;

  @media only screen and (max-width: 604px) {
    margin-top: -80vw;
    font-size: 9vw;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    margin-top: -86vw;

  }
`;
export default Home;
