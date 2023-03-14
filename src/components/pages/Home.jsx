import React, {useState} from 'react';
import styled from 'styled-components';
import image from '../../img/mainpage.png';
import imagecircle from '../../img/circle.png';
import { useHistory } from "react-router-dom";

function Home(props) {
    const [width, setWidth] = useState('43vw');
    const [height, setHeight] = useState('43vw');
    const [marginTop, setMarginTop] = useState('-53vw');
    const [color, setColor] = useState('#F5F8FF');

    const history = useHistory();

    function handler2() {
        history.replace("/club");
        window.location.reload();
    }
    return (
        <Container>
            <Img src ={image}></Img>
            <Img2 src ={imagecircle} className='img2' style={{width, height,marginTop}} onClick={() => {
                    setWidth('90vw');
                    setHeight('90vw');
                    setMarginTop('-80vw');
                    setColor('#161616');
                    setTimeout(() => {
                        handler2();
                    }, 1250);
                }}></Img2>
            <Text style={{color}}>MIRIM ALBUM</Text>
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
    margin-top: -3vw;`;
const Img2 = styled.img`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    transition: all ease 2s 0s;`;
const Text = styled.div`
    font-size: 4.5vw;
    letter-spacing: 0.65rem;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif; 
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: -25vw; 
    transition: all ease 2s 0s; 
`;
export default Home;