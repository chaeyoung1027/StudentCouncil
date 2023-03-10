import React, {useState} from 'react';
import styled from 'styled-components';
import about from '../../img/about.png';
import imagecircle from '../../img/circle.png';
import { useHistory } from "react-router-dom";

function About(props) {

    return (
        <Container style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
          <Container style={{backgroundColor: 'black', opacity: '0.7', display: 'grid', gridTemplateColumns: '50%'}}>
            <Text style={{}}>ABOUT</Text>
            <Text style={{fontSize: '30px'}}>32기 학생회</Text>
          </Container>  
        </Container>
    )
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const Text = styled.div`
  font-size: 50px;
  color: white;
`;
export default About;