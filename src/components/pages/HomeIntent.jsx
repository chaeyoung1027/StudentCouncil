import React, {useState} from 'react';
import styled from 'styled-components';
import image from '../../img/mainpage.png';
import imagecircle from '../../img/circle.png';
import { useHistory } from "react-router-dom";

function Home(props) {
    return (
        <Container>
            <Text>TEXTINPUT</Text>
        </Container>
    )
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #161616;
`;
const Text = styled.div`
    color: #FFFFFF;
    font-size: 3vw;
    text-align: center;
    margin-top: 10vw;
    letter-spacing: 4rem;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif; 
`;
export default Home;