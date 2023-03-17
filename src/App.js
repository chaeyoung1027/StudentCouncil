import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import HomeIntent from "./pages/HomeIntent";
import Club from "./pages/Club";
import ClubDetail from "./pages/ClubDetail";
import SchEvent from "./pages/SchoolEvent";
import About from "./pages/About";

function App() {
  let clubs = [
    "MAS",
    "JS STUDY",
    "D!DA",
    "CPU\n(C Project with yoU)",
    "APP&ME",
    "우친동\n(우리 친해요 동아리)",
    "게임메이커\n(Game Maker)",
    "Creative Design",
    "미림벤쳐창업반\n(MIVEN)",
  ];

  let clubsContent = [
    "My Ability Share\n동아리명에 맞게 서로의 재능을 나누며 성장하기 위해 노력하는 동아리입니다.\n자유로운 분위기 속에서 원활한 협동을 할 수 있으며 포트폴리오를 채우고 개발 및 디자인 능력을 키울 수 있도록 여러 프로젝트를 진행합니다.\n하나에서만 머무르지 않고 그 이상을 나누며 스스로 성장할 수 있는 길을 만듭니다.\n나누며 성장하는 우리, MAS입니다.",
    "실무에서 많이 사용되는 JS를 심화적으로 학습하는 동아리입니다.",
    "D!DA(디자인 다 모여라, 디자인 다 하자)반은 디자인을 기반으로 한 디자인 스터디를 하는 동아리로, 멘티 · 멘토를 이루어 디자인 툴과 색감, 배치 등 디자인 관련 작업을 하며 학생들의 역량을 키워나가는 동아리입니다. -	주요 활동 내용\n1. 달마다 선정한 주제에 맞게 작품을 제작하고 공유하여 피드백을 주고받는 활동\n2. xd, Adobe Illustrator, Photoshop 등 그래픽 디자인툴 연습3. 공모전 참가\n4. 굿즈 제작\n5. 디자인, 취업 등과 관련된 정보 공유",
    "공부하는 주 언어가 c언어인 만큼 C를 활용한 게임제작, 프로젝트 진행, 공모전 참가 등 다양한 활동을 활발하게 진행하고 있습니다.",
    "앱앤미는 미림여자정보과학고등학교의 대표적인 전공동아리중 하나로 다양한 차세대 IT개발 흐름에 따른 기술들을 익히고 연구하며 실제로 서비스를 구현해서 학교 및 사회에 기여하는 동아리 입니다.\n개발자와 디자이너의 협업을 통해 전공실력을 보다 더 키워나갈 수 있을뿐만 아니라 각종 IT관련 공모전 및 대회에 참여하며 다양한 활동을 할 수 있습니다.또한, 동아리 담당 전공 선생님들과 함께하는 동아리 시간을 통해 각자의 전공과 관련된 스터디를 진행하여 전공 관련 지식들을 넓힐 수 있습니다.",
    "우친동은 같이 보드게임도 하고 이야기도 하며 서로간의 유대감을 쌓고, \n프로젝트와 공모전을 진행하는 동아리 입니다.",
    "전공언어를 게임 프로그래밍을 통해 재밌게 학습하는 동아리입니다.\n주요활동은 다음과 같습니다. \n1.자바, c언어로 만드는 게임\n2.게임관련 공모전 나가기\n3.선후배간의 친목을 통한 꿀팁 공유",
    "크리에이티브의 활동 \n다양한 디자인의 경험을 해볼 수 있어요! \n• 디자인 제작 과정으로 자연스럽게 모이는 포트폴리오를 얻을 수 있어요!\n• 공모전을 나가고 싶을 때 선배들과 함께 할 수 있어요!\n• 제작 과정에서 전공지식이나 실무적인 꿀팁을 배울 수 있어요!\n• 자신이 원하는 디자인을 하고 기획, 판매에서 기부까지 다양한 경험으로 디자인 실력을 키울 수 있어요!\n ",
    "미림벤처창업반에서는 선배, 친구들과 함께 \n여러 공모전에 참여합니다 동아리 활동을 통해 \n공모전 참가 경험 및 발표 경험 등을 쌓을 수 있습니다. \n또 다양한 공모전 참여 활동을 통해 문제해결능력 상승에도 많은 도움이 됩니다. \n\n이러한 과정 속에서 선배, 후배, 친구들과 자연스레 친해져 학창 시절속가장 큰 추억으로 동아리 활동이 자리매김합니다.",
  ];

  let clubsLink = [
    "https://www.facebook.com/profile.php?id=100080336959216&mibextid=LQQJ4d",
    "https://instagram.com/js_mirim?igshid=YmMyMTA2M2Y=",
    "https://instagram.com/d.da__?igshid=YmMyMTA2M2Y=",
    "https://instagram.com/cpu_mirim?igshid=YmMyMTA2M2Y=",
    "https://www.instagram.com/app_and_me/?igshid=YmMyMTA2M2Y%3D",
    "https://instagram.com/mirim_woochindong?igshid=YmMyMTA2M2Y=",
    "https://www.instagram.com/gamemakerrrr/",
    "https://instagram.com/crea.tive20_?igshid=YmMyMTA2M2Y=",
    "https://www.instagram.com/2023.miven/",
  ];
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/homeintent" component={HomeIntent} />
        <Route
          path="/club/detail/:id"
          render={() => (
            <ClubDetail
              clubs={clubs}
              clubsContent={clubsContent}
              clubsLink={clubsLink}
            />
          )}
        />
        <Route path="/club" render={() => <Club clubs={clubs} />} />
        <Route path="/schoolevent" component={SchEvent} />
        <Route path="/about" component={About} />
        <Route path="*" element={<h1>404 페이지</h1>} />
      </Switch>
    </HashRouter>
  );
}

export default App;
