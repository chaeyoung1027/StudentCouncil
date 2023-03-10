import React, {useState} from 'react';
import styled from 'styled-components';
import about from '../../img/about.png';
import imagecircle from '../../img/circle.png';
import { useHistory } from "react-router-dom";
import './About.css';

function About(props) {
    return (
      <>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container style={{backgroundColor: 'black', opacity: '0.7', height: '100vh',width: '100vw'}}></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>32기 학생회</div>
            </Box> 
            <a href="#section02" style={{position: 'absolute'}}><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container style={{backgroundColor: 'black', opacity: '0.7', height: '100vh',width: '30vw', margin: '0 auto'}}></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>32기 학생회</div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>32기 학생회</div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>32기 학생회</div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>32기 학생회</div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        </>
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