import React from "react";
import styled from "styled-components";
import image from './first.png';

function Card(props) {
    const { img, contents } = props;

    return <StyleCard>
            <Img src={image}></Img>
           </StyleCard>
}

const StyleCard = styled.div`
    width: 200px;
    height: 280px;
    background-color: #fff;
    border-radius: 15px;
    object-fit: cover;
`;
const Img = styled.div`
    width: 100%;
`;

export default Card;