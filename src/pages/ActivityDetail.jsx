//학생회 행사 정리 페이지
import React, { useState, Component } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import AliceCarousel from "./Carousel";
import Dial from "../img/Dial.png";
import "./ActivityDetail.css";
import i0 from '../img/activityImg/0.png'
import i1 from '../img/activityImg/1.jpg'
import i2 from '../img/activityImg/2.jpg'
import i3 from '../img/activityImg/3.jpg'
import i4 from '../img/activityImg/4.jpg'
import i5 from '../img/activityImg/5.jpg'
import i6 from '../img/activityImg/6.jpg'
import i7 from '../img/activityImg/7.jpg'
import i8 from '../img/activityImg/8.jpg'
import i9 from '../img/activityImg/9.jpg'
import i10 from '../img/activityImg/10.jpg'
import i11 from '../img/activityImg/11.jpg'
import i12 from '../img/activityImg/12.jpg'
import i13 from '../img/activityImg/13.jpg'
import i14 from '../img/activityImg/14.jpg'
import i15 from '../img/activityImg/15.jpg'
import i16 from '../img/activityImg/16.jpg'
import i17 from '../img/activityImg/17.jpg'
import i18 from '../img/activityImg/18.jpg'
import i19 from '../img/activityImg/19.jpg'
import i20 from '../img/activityImg/20.jpg'
import i21 from '../img/activityImg/21.jpg'
import i22 from '../img/activityImg/22.jpg'
import i23 from '../img/activityImg/23.jpg'
import i24 from '../img/activityImg/24.jpg'
import i25 from '../img/activityImg/25.jpg'
import i26 from '../img/activityImg/26.jpg'
import i27 from '../img/activityImg/27.jpg'
import i28 from '../img/activityImg/28.jpg'
import i29 from '../img/activityImg/29.jpg'
import i30 from '../img/activityImg/30.jpg'
import i31 from '../img/activityImg/31.jpeg'
import i32 from '../img/activityImg/32.jpeg'
import i33 from '../img/activityImg/33.JPG'
import i34 from '../img/activityImg/34.jpeg'
import i35 from '../img/activityImg/35.jpeg'
import i36 from '../img/activityImg/36.jpeg'
import i37 from '../img/activityImg/37.jpeg'
import i38 from '../img/activityImg/38.jpeg'
import i39 from '../img/activityImg/39.jpeg'
import i40 from '../img/activityImg/40.jpeg'
import i41 from '../img/activityImg/41.jpeg'
import i42 from '../img/activityImg/42.jpeg'
import i43 from '../img/activityImg/43.jpeg'
import i44 from '../img/activityImg/44.JPG'
import i45 from '../img/activityImg/45.JPG'
import i46 from '../img/activityImg/46.JPG'
import i47 from '../img/activityImg/47.JPG'
import i48 from '../img/activityImg/48.jpeg'
import i49 from '../img/activityImg/49.jpeg'
import i50 from '../img/activityImg/50.JPG'
import i51 from '../img/activityImg/51.JPG'
import i52 from '../img/activityImg/52.JPG'
import i53 from '../img/activityImg/53.jpg'
import i54 from '../img/activityImg/54.jpg'
import i55 from '../img/activityImg/55.jpg'
import i56 from '../img/activityImg/56.jpg'
function ClubDetail(props) {

  let Mailbox = [
    i0
  ];
  let RollingPaper = [
    i1
  ];
  let clubPresentation = [
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i21,
    i22,
    i23,
    i24,
    i25,
    i26,
    i27,
    i28,
    i29,
    i30,
  ];
  let gatherUp = [
    i31,
    i32,
    i33,
  ];
  let Donation = [
    i34,
    i35,
    i36,
    i37,
    i38,
    i39,
    i40,
    i41,
    i42,
    i43,
    i44,
    i45,
    i46,
    i47,
  ];
  let Instead = [
    i48,
    i49,
  ];
  let campaign = [
    i50,
    i51,
    i52,
  ];
  let Transition = [
    i53,
    i54,
    i55,
    i56,
  ];

  let { id } = useParams();
  const navigate = useNavigate();

  let Image;
  if(id == 0){
    Image = [...Mailbox];
  }else if(id == 1){
    Image = [...clubPresentation];
  }else if(id == 2){
    Image = [...gatherUp];
  }else if(id == 3){
    Image = [...Donation];
  }else if(id === 4){
    Image = [...Instead];
  }else if(id === 5){
    Image = [...campaign];
  }else if(id === 6){
    Image = [...Transition];
  }

  return (
    <Container>
      <HomeButton onClick={()=>{navigate('/schoolevent')}}>home</HomeButton>

      <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F3F3F3",
      }}
    >
      <div className="explain">
        <div className="expTitle">{props.activity[id]}</div>
        <div className="exp">
        {props.actexp[id]}
        </div>
      </div>
      <img src={Dial} alt="다이얼" className="dial" />
    </div>

    </Container>
  );
}
const Container = styled.div`
  top: 0;
  width: 100vw;
  overflow: hidden;
  // height: 1000px;
  background-color: #F3F3F3;
`;
const HomeButton = styled.button`
  cursor: pointer;
  padding: 0.4rem 1rem;
  background-color: #eaeaea;
  color: black;
  border: none;
  float: left;
  border-radius: 0.3rem;
  margin: 1.5rem;
`;

export default ClubDetail;
