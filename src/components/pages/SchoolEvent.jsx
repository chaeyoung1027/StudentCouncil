import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function SchoolEvent(props) {

    const history = useHistory();

    let [행사, 행사명] = useState([
      "느린 우체통",
      "학생회 소통망 이벤트",
      "롤링페이퍼",
      "CA 발표회",
      "국군위문병",
      "체육대회",
      "학교 폭력/흡연 예방/선플/안전사고 예방 캠페인",
    ]);

    function handler2() {
        history.replace("/");
        window.location.reload();
    }
  return (
    <>
    <HomeButton onClick={handler2}>Home</HomeButton><Container>
      <Circle />
    </Container>
    </>
  );
}

const HomeButton = styled.button`
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
  float: left;
`;
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #f3f3f3;
  overflow: hidden;
`;
const Circle = styled.div`
  width: 55vw;
  height: 55vw;
  background-color: #ffffff;
  border-radius: 50rem;
  position: absolute;
  top: 43rem;
  left: 27rem;
`;

export default SchoolEvent;
