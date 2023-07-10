//학생회 행사 정리 페이지
import React from "react";
import { Link, useHistory } from "react-router-dom";
import homeButtonImg from "../img/homeButton.png";
import Dial from "../img/Dial.png";
import "./Activity.css";


function Activity() {
  //홈으로
  const history = useHistory();
  function toHome() {
  history.replace("/homeintent");
  window.location.reload();
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#F3F3F3",
      }}
    >
      <img src={homeButtonImg} alt="홈버튼" className="homeButton" onClick={toHome} />
      <div className="explain">
        <div className="expTitle">동아리 발표회</div>
        <div className="exp">
          미림벤처창업반에서는 선배, 친구들과 함께 여러 공모전에 <br />
          참여합니다. 동아리 활동을 통해 공모전 참가 경험 및 발표 경험 <br />
          등을 쌓을 수 있습니다. 또 다양한 공모전 참여 활동을 통해 <br />
          문제해결능력 상승에도 많은 도움이 됩니다. <br />
          이러한 과정 속에서 선배, 후배, 친구들과 자연스레 친해져 <br />
          학창 시절 속 가장 큰 추억으로 동아리 활동이 자리매김합니다.
        </div>
      </div>
      <img src={Dial} alt="다이얼" className="dial" />
    </div>
  );
}

export default Activity;
