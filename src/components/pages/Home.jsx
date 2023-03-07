import React from 'react';
import styled from 'styled-components';
import image from '../../img/mainpage.png';
import imagecircle from '../../img/circle.png';
import './home.css';

function Home(props) {
    return (
        <Container>
            <Img src ={image}></Img>
            <Img2 src ={imagecircle}></Img2>
            <Text>MIRIM ALBUM</Text>
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
const Img = styled.img`
    margin: 0 auto;
    width: 63vw;
    display: flex;
    justify-content: center;
    margin-top: -2.5vw;`;
const Img2 = styled.img`
    width: 43vw;
    height: 43vw;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: -53vw;`;
const Text = styled.div`
    font-size: 4.5vw;
    letter-spacing: 0.65rem;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    color: #F5F8FF;  
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: -25vw;  
`;
export default Home;