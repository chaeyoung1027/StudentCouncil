//useState는 랜더링이 되는 순간에 실행된다. 즉, 변경하고자 하는 값이 있고, set은 그 값을 변경하는 함수이다.
import React, { useState } from "react";
//styled-components는 css를 사용할 수 있게 해주는 라이브러리이다.
import styled from "styled-components";
import image from "../img/mainpage.png";
import imagecircle from "../img/circle.png";
//react-router-dom은 라우터를 사용할 수 있게 해주는 라이브러리이다.
// 라우터는 주소창의 주소를 변경하고, 페이지를 새로고침하는 기능을 한다.
import { useHistory } from "react-router-dom";

function Home(props) {
  //useState는 랜더링이 되는 순간에 실행된다. 즉, 변경하고자 하는 값이 있고, set은 그 값을 변경하는 함수이다.
  //그래서 setWidth를 실행하면 Img 태그의 width의 값이 변경되고, 그 값이 43vw에서 90vw로 변경된다.
  const [width, setWidth] = useState("43vw");
  //setHeight를 실행하면 Img 태그의 height의 값이 변경되고, 그 값이 43vw에서 90vw로 변경된다.
  const [height, setHeight] = useState("43vw");
  //setMarginTop를 실행하면 Img 태그의 margin-top의 값이 변경되고, 그 값이 -53vw에서 -80vw로 변경된다.
  const [marginTop, setMarginTop] = useState("-53vw");
  //setColor를 실행하면 Text 태그의 color의 값이 변경되고, 그 값이 #F5F8FF에서 #161616로 변경된다.
  const [color, setColor] = useState("#F5F8FF");

  //useHistory는 라우터를 사용할 때 사용하는 훅이다.
  //즉, history.replace를 사용하면 주소창의 주소가 변경되고, window.location.reload()를 사용하면 페이지가 새로고침된다.
  const history = useHistory();

  function handler2() {
    //아래 코드의 history.replace("/club");은 주소창의 주소를 /club으로 변경한다.
    history.replace("/homeintent");
    //window.location.reload()는 페이지를 새로고침한다.
    window.location.reload();
  }
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
          setMarginTop("-80vw");
          setColor("#000");
          //setTimeout을 사용한 이유는 위의 코드가 실행되고 나서 1.25초 후에 handler2()가 실행되도록 하기 위해서이다.
          setTimeout(() => {
            handler2();
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
    margin-top: 60vw;
    width: 80%;
    height: 41%;
  }
`;
const Img2 = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  transition: all ease 2s 0s;

  @media only screen and (max-width: 604px) {
    margin-top: -62vw !important;
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
    width: 100%;
  }
`;
export default Home;
