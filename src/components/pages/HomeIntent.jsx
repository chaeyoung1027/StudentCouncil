import React, {useState,Component } from 'react';
import { Carousel } from 'react-circular-carousel'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Card from "../home-ui/Card";

function HomeIntent(props) {

    function Handler() {
        const frame = document.querySelector("section");
        const lists = frame.querySelectorAll("article");
        const audio = frame.querySelectorAll("audio");
        const prev = document.querySelector(".btnPrev");
        const next = document.querySelector(".btnNext");
        const deg = 45; //각각의 article요소가 회전할 각도
        const len = lists.length - 1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
        let i = 0;
        let num = 0;
        let active = 0;

        function activation(index, lists) {
            for (let el of lists) {
                el.classList.remove("on");
            }
                lists[index].classList.add("on");
        }

        //article의 개수만큼 반복
        for (let el of lists) {
            let pic = el.querySelector(".pic");
            //각 article 요소를 45도씩 회전하고 아래로 배치
            el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
            pic.style.backgroundImage = `url(../../img/first.png)`;
            i++;
        }

        //모든 오디오 요소를 반복하면서 정지시키고 .pic 요소의 모션을 중지해서 초기화하는 함수
        function initMusic() {
        for (let el of audio) {
            el.closest("article").querySelector(".pic").classList.remove("on");
            }
        }

        //prev 버튼 클릭 시
        prev.addEventListener("click", () => {
            //num값을 증가시키며 frame 45도 만큼 증가시키며 시계 방향으로 계속 회전
            num++;
            frame.style.transform = `rotate(${deg * num}deg)`;
            active == 0 ? (active = len) : active--;
            activation(active, lists);
        });

        //next 버튼 클릭시
        next.addEventListener("click", () => {
            //num값을 감소시키며 frame을 45도 만큼 감소시키며 반시계 방향으로 회전
            num--;
            frame.style.transform = `rotate(${deg * num}deg)`;
            active == len ? (active = 0) : active++;
            activation(active, lists);
        });

    }

    return (
        <Container>
            <Text>TEXTINPUT</Text>
                <Section1>
                    <Section2 className='section'>
                        <Card className='article'></Card>
                        <Card className='article'></Card>
                        <Card className='article'></Card>
                        <Card className='article'></Card>
                        <Card className='article'></Card>
                        <Card className='article'></Card>
                    </Section2>
                    <Prev><span className='prev'>이전</span></Prev>
                    <Next><span className='next'>다음</span></Next>
                </Section1>
            <Circle></Circle>
        </Container>
        
    )
}

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
    margin-top: 10vw;
    letter-spacing: 4rem;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif; 
`;

// [12 file figure tag]
// 전체를 감싸는 용도
const Section1 = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 600px;
	overflow: hidden;
	position: relative;    
`;
// [12 file section tag]
// 이미지를 감싸는 용도
const Section2 = styled.div`
    display: flex;
    width: 50vw;
	height: 65vh;
	position: absolute;
	left: 35%;
	top: 38%;
	margin-top: -25vh;
	margin-left: -10vw;	
	transition: 1s;
    gap : 20px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;`;
const Circle = styled.div`
  width: 80vw;
  height: 80vw;
  background-color: #ffffff;
  border-radius: 100rem;
  position: absolute;
  top: 50rem;
  left: 12rem;
`;

// 이전 버튼
const Prev = styled.div`
	width: 60px;
	height: 60px;
	position: absolute;
	top: 50%;
	left: 50%;
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
	width: 60px;
	height: 60px;
	position: absolute;
	top: 50%;
	right: 50%;
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