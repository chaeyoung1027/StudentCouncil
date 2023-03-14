// import React, {useState,Component } from 'react';
// import { Carousel } from 'react-circular-carousel'
import styled from 'styled-components';
import {useState, useRef} from 'react';
// import { useHistory } from "react-router-dom";
// import Card from "../home-ui/Card";

function HomeIntent(props) {
    const [angle, setAngle] = useState(45);
    const [num, setNum] = useState(0);
    const [active, setActive] = useState(0);
    const frame = useRef(document.querySelector("section"));
    const lists = useRef([]);
    const deg = 45; //각각의 article요소가 회전할 각도
    const len = lists.current.length - 1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
    let i = 0;
    
    //article의 개수만큼 반복
    for (i = 0; i < lists.current.length; i++) {
        //각 article 요소를 45도씩 회전하고 아래로 배치
        lists.current[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    }

    function activation(index, lists) {
        console.log(index);
        console.log(lists[i]);
        for (i = 0; i < lists.length; i++) {
            lists[i].className = (i === index) ? "on" : "";
        }
    }
    
    //prev 버튼 클릭 시
    const onIncrease = () => {
        setNum(num + 1);
        setAngle(deg * num - 45);
        frame.current.style.transform = `rotate(${angle + 45}deg)`;
        active === 0 ? setActive(len) : setActive(active - 1);
        activation(active, lists.current);
    }

    //next 버튼 클릭시
    const onDecrease = () => {
        setNum(num - 1);
        setAngle(deg * num - 45);
        frame.current.style.transform = `rotate(${angle - 45}deg)`;
        active === len ? setActive(0) : setActive(active + 1);
        activation(active, lists.current);
    }

    return (
        <Container>
            <Text>TEXTINPUT</Text>
            <figure>
                <section ref={frame}>
                    <article ref={(el)=>lists.current[0]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Blizzards</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[1]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Calm</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[2]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Dusty Road</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[3]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Escape</h2>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[4]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Payday</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[5]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Retreat</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[6]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Seasonal</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>

                    <article ref={(el)=>lists.current[7]=el}>
                    <div className="inner">
                        <div className="pic">
                        <div className="dot"></div>
                        </div>

                        <div className="txt">
                        <h2>Vespers</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    </article>
                </section>

                </figure>
                <Prev className='btnPrev' onClick={onIncrease}><span className='prev'>이전</span></Prev>
                <Next className='btnNext' onClick={onDecrease}><span className='next'>다음</span></Next>
        </Container>
        
    )

}


/*
window.onload = function Handler() {
    const frame = document.querySelector("section");
    const lists = document.querySelectorAll("article");
    const prev = document.querySelector(".btnPrev");
    const next = document.querySelector(".btnNext");
    const deg = 45; //각각의 article요소가 회전할 각도
    const len = lists.length - 1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
    let i = 0;
    let num = 0;
    let active = 0;

    function activation(index, lists) {
      for (let el of lists) {
        el.classNameList.remove("on");
      }
      lists[index].classNameList.add("on");
    }
    //article의 개수만큼 반복
    for (let el of lists) {
    //   let pic = el.querySelector(".pic");
      //각 article 요소를 45도씩 회전하고 아래로 배치
      el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
      i++;
    }
    
    //prev 버튼 클릭 시
    prev.addEventListener("click", () => {
    
      //num값을 증가시키며 frame 45도 만큼 증가시키며 시계 방향으로 계속 회전
      num++;
      frame.style.transform = `rotate(${deg * num}deg)`;
    
      active === 0 ? (active = len) : active--;
      activation(active, lists);
    });
    
    //next 버튼 클릭시
    next.addEventListener("click", () => {
    
      //num값을 감소시키며 frame을 45도 만큼 감소시키며 반시계 방향으로 회전
      num--;
      frame.style.transform = `rotate(${deg * num}deg)`;
    
      active === len ? (active = 0) : active++;
      activation(active, lists);
    });
    
    
}*/

const Container = styled.div`
    top: 0;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    background-color: #161616;
    position: absolute;
`;
const Text = styled.div`
    color: #FFFFFF;
    font-size: 3.2vw;
    text-align: center;
    margin-top: 7vw;
    letter-spacing: 4rem;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif; 
`;

// [12 file figure tag]
// 전체를 감싸는 용도
// const Section1 = styled.div`
// 	width: 100%;
// 	height: 100vh;
// 	min-height: 600px;
// 	overflow: hidden;
// 	position: relative;
//     overflow: hidden;
// `;
// // [12 file section tag]
// // 이미지를 감싸는 용도
// const Section2 = styled.div`
//     display: flex;
//     width: 100%;
// 	height: 65vh;
// 	position: absolute;
// 	left: 9.5%;
// 	top: 38%;
// 	margin-top: -25vh;
// 	margin-left: -10vw;	
// 	transition: 1s;
//     gap : 50px;
// `;
const Circle = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: rgb(255, 255, 255);
    border-radius: 100rem;
    position: absolute;
    top: 53rem;
`;

// 이전 버튼
const Prev = styled.div`
    z-index: 99;
	width: 60px;
	height: 60px;
	position: absolute;
	top: 70%;
	left: 55%;
	transform: translate(-20vw, -50%);
	display: flex;
	align-items: center;
	text-align: left;
	cursor: pointer;
    // 화살표 모션
    &:hover span {
	opacity: 0;
	transform: translateX(100%);
    }
    &:hover::before {
	transform: rotate(-30deg);
    }
    &:hover::after {
	transform: rotate(30deg);
    }
    //전체 모션
    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 0px;
        transform-origin: left center;
        transform: rotate(-180deg);
        transition: 0.5s;
    }
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #fff;
        position: absolute;
        bottom: 50%;
        left: 0px;
        transform-origin: left center;
        transform: rotate(180deg);
        transition: 0.5s;
    }
`;

// 다음버튼
const Next = styled.div`
    z-index: 99;
	width: 60px;
	height: 60px;
	position: absolute;
	top: 70%;
	right: 52%;
	transform: translate(20vw, -50%);
	display: flex;
	align-items: center;
	text-align: right;
	cursor: pointer;
    // 화살표 모션
    &::before {
	content: "";
	display: block;
	width: 100%;
	height: 1px;
	background: #fff;
	position: absolute;
	top: 50%;
	left: 0px;
	transform-origin: right center;
	transform: rotate(180deg);
	transition: 0.5s;
    }
    &::after {
	content: "";
	display: block;
	width: 100%;
	height: 1px;
	background: #fff;
	position: absolute;
	bottom: 50%;
	left: 0px;
	transform-origin: right center;
	transform: rotate(-180deg);
	transition: 0.5s;
    }
    &:hover span {
	opacity: 0;
	transform: translateX(-100%);
    }
    &:hover::before {
	transform: rotate(30deg);
    }
    &:hover::after {
	transform: rotate(-30deg);
    }
`;

export default HomeIntent;