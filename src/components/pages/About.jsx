import React, {useState} from 'react';
import styled from 'styled-components';
import about from '../../img/about.png';
import imagecircle from '../../img/circle.png';
import { useHistory } from "react-router-dom";

function About(props) {
    return (
        <Container style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
          <Container style={{backgroundColor: 'black', opacity: '0.7'}}></Container>
          <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>32기 학생회</div>
          </Box>  
        </Container>
    )
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const Box = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default About;