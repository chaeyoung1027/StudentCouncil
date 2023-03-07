import React from 'react';
import styled from 'styled-components';
import image from '../../img/mainpage.png';

function Home(props) {
    return (
        <Container>
            <Img src ={image}></Img>
        </Container>
    )
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: #000;
`;
const Img = styled.img`
    margin: 0 auto;
    width: 52vw;
    display: flex;
    justify-content: center;
    margin-top: -2.5vw;`;
export default Home;