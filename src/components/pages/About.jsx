import React, {useState} from 'react';
import styled from 'styled-components';
import about from '../../img/about.png';
import './About.css';

function About(props) {
    return (
      <>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container style={{backgroundColor: 'black', opacity: '0.7', height: '100vh',width: '100vw'}}></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem', fontSize: '50px'}}>ABOUT</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem', fontSize: '30px', opacity: '0.6'}}>32기 학생회</div>
            </Box> 
            <a href="#section02" style={{position: 'absolute'}}><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container style={{backgroundColor: 'black', opacity: '0.7', height: '100vh',width: '36vw', margin: '0 auto'}}></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '0.5rem', fontSize: '30px'}}>Intro.</div>
              <div style={{color : 'white', fontWeight: 'normal', fontSize: '0.9rem', opacity: '0.7', fontSize: '15px'}}><br/><br/><br/>안녕하세요. 32기 학생회입니다.<br/>저희는 여러분과의 소통을 위하여 많은 이야기를 들었고,<br/> 더 편안한 미림을 위한 공약을 입으로 약속드렸습니다.<br/>여러분의 말에 더욱 집중하며 사소한 것이라도 진실을 전하기 위해 눈을 맞추었습니다.<br/> 이제 남은 것은 여러분과 나눴던 약속을 실천하는 일이라고 생각합니다.<br/><br/><br/>그래서 저희 32기 학생회는 여러분과의 약속인<br/> '미림 학생 주도 잡지 제작' 공약을 이행하고자 웹사이트를 제작하였습니다.<br/>웹사이트를 통해 학교 생활과 더블어 행사 활동이나 학교에서의 재미난 이야깃거리를 얻을 수 있으며,<br/> 미림에서 보낸 따듯한 추억들을 저장할 수 있도록 제작하였습니다.<br/>앞으로 학생회는 '미림 학생 주도 잡지 웹 사이트'를 통해<br/> 앞으로 더 많은 미림인들의 이야기를 들으며, 더 편안한 미림을 만들기 위해 노력하겠습니다. 
              </div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
        <Container style={{backgroundColor: 'black', opacity: '0.7', height: '100vh',width: '70vw', marginLeft: '30vw'}}></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh', opacity: '0.7'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '1.5rem',letterSpacing: '0.1rem'}}>소통</div>
              <div style={{color : 'white', fontWeight: 'lighter', fontSize: '0.9rem'}}>학생과 미림을 연결해주는 소통망의 일부로써 학생과 학생, 학생과 선생님, 선후배 등 미림 모두를 대상으로 마음을 전할 수 있도록 활동에 임했습니다.
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '1.5rem',letterSpacing: '0.1rem'}}>청춘</div>학생회는 한 번뿐인 학창 시절, 즐거운 추억이 많았으면 하는 바람을 동기 삼았습니다. 이에 많은 학생이 참여할 수 있는 즐거운 이벤트들을 기획하고 실천하였습니다.</div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
            <Container></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>Activity.</div>
            </Box> 
            <a href="#section02"><span></span>Scroll</a>
        </section>
        <section id="section01" class="demo" style={{backgroundImage: `url(${about})`, objectFit: 'none' }}>
        <Container style={{backgroundColor: 'black', opacity: '0.7', height: '100vh',width: '36vw', margin: '0 auto'}}></Container>
            <Box style={{position: 'absolute', top: '0', width: '100vw', height: '100vh'}}>
              <div style={{color : 'white', fontWeight: 'bold', fontSize: '2.5rem',letterSpacing: '1rem'}}>Thanks to.</div>
              <div style={{color : 'white', fontWeight: 'normal', fontSize: '0.9rem', opacity: '0.7', fontSize: '15px'}}>학생회 총책임 박향규선생님, 학생회 담당이신 김민혜 선생님께 감사의 말씀을 드립니다.<br/>32기 학생회가 서투른 점도, 미숙한 점도 많았지만 미림의 모든 학생 여러분과 선생님들의 도움으로<br/> 1년이라는 시간 동안 성장해나가는 학생회가 될 수 있었습니다.<br/> 남은 반년의 시간도 함께 좋은 학창시절을 만들어나갈 수 있도록 노력하겠습니다.<br/>앞으로의 미림 학생회에게 응원의 말을 남기며 신입생과 재학생 모두 행복하게 웹사이트를 이용해주시길 바라겠습니다. 감사합니다.<br/>A very special thanks to you 
</div>
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