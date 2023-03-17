import React from "react";
//styled-components는 css를 사용할 수 있게 해주는 라이브러리이다.
import styled from "styled-components";
import about from "../img/about.png";
import "./About.css";
import { useHistory } from "react-router-dom";

function About(props) {
  const history = useHistory();

  function toHome() {
    history.replace("/homeintent");
    window.location.reload();
  }
  return (
    <div id="container">
      <section
        id="section01"
        class="demo"
        style={{ backgroundImage: `url(${about})`, objectFit: "none" }}
      >
        <Containers
          style={{
            backgroundColor: "black",
            opacity: "0.7",
            height: "100vh",
            width: "100vw",
          }}
        ></Containers>
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2.5rem",
              letterSpacing: "1rem",
            }}
          >
            ABOUT
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "lighter",
              fontSize: "1.4rem",
            }}
          >
            32기 학생회
          </div>
        </Box>
        <HomeButton onClick={toHome}>home</HomeButton>
        {/* <a href="#section02" style={{position: 'absolute'}}><span></span>Scroll</a> */}
      </section>
      <section
        id="section02"
        class="demo"
        style={{ backgroundImage: `url(${about})`, objectFit: "none" }}
      >
        <Container
          style={{
            backgroundColor: "black",
            opacity: "0.7",
            height: "100vh",
            width: "30vw",
            margin: "0 auto",
          }}
        ></Container>
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100vh",
            marginTop: "-2rem",
          }}
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "0.2rem",
              marginBottom: "7rem",
            }}
          >
            Intro.
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "lighter",
              fontSize: "0.9rem",
              width: "21rem",
              lineHeight: "1.5rem",
              opacity: "0.7",
            }}
            className="t"
          >
            안녕하세요. 32기 학생회입니다.
            <br />
            저희는 여러분과의 소통을 위하여 많은 이야기를 들었고, 더 편안한
            미림을 위한 공약을 입으로 약속드렸습니다.
            <br />
            여러분의 말에 더욱 집중하며 사소한 것이라도
            <br />
            진실을 전하기 위해 눈을 맞추었습니다. 이제 남은 것은 여러분과 나눴던
            약속을 실천하는 일이라고 생각합니다.
            <br />
            <br />
            <br />
            그래서 저희 32기 학생회는 여러분과의 약속인 '미림 학생 주도 잡지
            제작' 공약을 이행하고자 웹사이트를 제작하였습니다. 웹사이트를 통해
            학교 생활과 더블어 행사 활동이나 학교에서의 재미난 이야깃거리를 얻을
            수 있으며, 미림에서 보낸 따듯한 추억들을 저장할 수 있도록
            제작하였습니다. 앞으로 학생회는 '미림 학생 주도 잡지 웹 사이트'를
            통해 앞으로 더 많은 미림인들의 이야기를 들으며, 더 편안한 미림을
            만들기 위해 노력하겠습니다.
          </div>
        </Box>
        {/* <a href="#section03"><span></span>Scroll</a> */}
      </section>
      <section
        id="section03"
        class="demo"
        style={{ backgroundImage: `url(${about})`, objectFit: "none" }}
      >
        <Container
          style={{
            backgroundColor: "black",
            opacity: "2",
            height: "100vh",
            width: "70vw",
            marginLeft: "37rem",
          }}
          className="two"
        ></Container>
        <div
          style={{
            position: "absolute",
            color: "#fff",
            marginTop: "-50rem",
            marginLeft: "25rem",
            fontSize: "2.5rem",
            letterSpacing: "1rem",
          }}
          className="value"
        >
          Value
        </div>
        <div
          style={{
            position: "absolute",
            color: "#fff",
            marginTop: "-35rem",
            marginLeft: "86rem",
            fontSize: "2.5rem",
            letterSpacing: "1rem",
          }}
        >
          Activity.
        </div>
        <Box2
          style={{
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100vh",
          }}
          className="talk"
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.6rem",
              letterSpacing: "1rem",
              textAlign: "left",
              marginBottom: "1rem",
            }}
          >
            소통
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "lighter",
              fontSize: "0.9rem",
              width: "20rem",
            }}
          >
            학생과 미림을 연결해주는 소통망의 일부로써 학생과 학생, 학생과
            선생님, 선후배 등 미림 모두를 대상으로 마음을 전할 수 있도록 활동에
            임했습니다.
          </div>
        </Box2>
        <Box2
          style={{
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100vh",
            marginTop: "38rem",
          }}
          className="chan"
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.6rem",
              letterSpacing: "1rem",
              textAlign: "left",
              marginBottom: "1rem",
            }}
          >
            청춘
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "lighter",
              fontSize: "0.9rem",
              width: "20rem",
            }}
          >
            학생회는 한 번뿐인 학창 시절, 즐거운 추억이 많았으면 하는 바람을
            동기 삼았습니다. 이에 많은 학생이 참여할 수 있는 즐거운 이벤트들을
            기획하고 실천하였습니다.
          </div>
        </Box2>
        {/* <a href="#section04"><span></span>Scroll</a> */}
      </section>
      <section
        id="section04"
        class="demo"
        style={{ backgroundImage: `url(${about})`, objectFit: "none" }}
      >
        <Container></Container>
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2.5rem",
              letterSpacing: "0.7rem",
              marginTop: "-15rem",
              marginBottom: "10rem",
            }}
            className="Active"
          >
            Activity.
          </div>
          <Box
            style={{
              width: 400,
              height: 400,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "primary.main" },
            }}
          />
          <div
            style={{
              color: "white",
              fontSize: "1.6rem",
              marginTop: "-20rem",
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          >
            Main event
          </div>
          <div
            style={{
              color: "white",
              fontSize: "1rem",
              width: "400px",
              textAlign: "center",
              opacity: "0.6",
              fontWeight: "normal",
            }}
          >
            학생회 소통망 이벤트
            <br />
            학생회 느린우체통 이벤트
            <br />
            미림 ‘대신 전해드립니다.’ SNS 운영
            <br />
            롤링페이퍼
            <br />
            동아리 발표회
          </div>
        </Box>
        {/* <a href="#section05"><span></span>Scroll</a> */}
      </section>
      <section
        id="section05"
        class="demo"
        style={{ backgroundImage: `url(${about})`, objectFit: "none" }}
      >
        <Container
          style={{
            backgroundColor: "black",
            opacity: "0.7",
            height: "100vh",
            width: "30vw",
            margin: "0 auto",
          }}
        ></Container>
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100vw",
            height: "100vh",
            marginTop: "-2rem",
          }}
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "0.2rem",
              marginBottom: "7rem",
            }}
          >
            Thanks to.
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "lighter",
              fontSize: "0.9rem",
              width: "20rem",
              lineHeight: "1.5rem",
            }}
          >
            학생회 총책임 박향규선생님, 학생회 담당이신 김민혜 선생님께 감사의
            말씀을 드립니다.
            <br />
            <br />
            <br />
            32기 학생회가 서투른 점도, 미숙한 점도 많았지만 미림의 모든 학생
            여러분과 선생님들의 도움으로 1년이라는 시간 동안 성장해나가는
            학생회가 될 수 있었습니다. 남은 반년의 시간도 함께 좋은 학창시절을
            만들어나갈 수 있도록 노력하겠습니다. 앞으로의 미림 학생회에게 응원의
            말을 남기며 신입생과 재학생 모두 행복하게 웹사이트를 이용해주시길
            바라겠습니다. 감사합니다.
            <br />
            <br />
            <br />
            <h3>A very special thanks to you</h3>
          </div>
        </Box>
        {/* <a href="#section01"><span></span>Scroll</a> */}
      </section>
    </div>
  );
}
const Containers = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 1328px) {
    width: 50rem !important;
  }
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

const Box2 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 45rem;
  margin-top: 28rem;

  @media only screen and (max-width: 1328px) {
    background-color: black !important;
    width: 20rem !important;
    height: 10rem !important;
  }
`;
const HomeButton = styled.button`
  position: absolute;
  top: 0;
  padding: 0.4rem 1rem;
  background-color: #fff;
  opacity: 1;
  color: black;
  border: none;
  float: left;
  border-radius: 0.3rem;
  margin: 1.5rem;
`;
export default About;
