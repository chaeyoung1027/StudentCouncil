import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Activity_Carousel = (props) => {
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  };

  const handleDragStart = (e) => e.preventDefault();
  const imagesArray = [
    [0, 1, 2, 3],
    [0, 1],
    [0],
    [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28,
    ],
    [0],
    [0, 1, 2],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [0, 1, 2],
  ];

  const items = imagesArray[props.id].map((i) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <img
            src={process.env.PUBLIC_URL + `/a/${props.id}/${i}.jpg`}
            alt=""
          />
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={1000}
        animationDuration={2500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </Contain>
  );
};
export default Activity_Carousel;

const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 25rem;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 15px;
  }
`;
