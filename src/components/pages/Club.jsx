import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Club(props) {
  const history = useHistory();

  const handler2 = () => {
    history.push("/");
  };

  return (
    <Container>
      <homeButton />
      <Title>MIRIM SOCIETY</Title>
      <HomeButton onClick={handler2}>home</HomeButton>
    </Container>
  );
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #f3f3f3;
`;
const HomeButton = styled.button`
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
`;
const Title = styled.p`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #475467;
`;
const Cotent = styled.p``;
export default Club;
