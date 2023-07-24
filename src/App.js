import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeIntent from "./pages/HomeIntent";
import Club from "./pages/Club";
import ClubDetail from "./pages/ClubDetail";
import SchEvent from "./pages/Activity";
import About from "./pages/About";
import ActivityDetail from "./pages/ActivityDetail";

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
    "D!DA(디자인 다 모여라, 디자인 다 하자)반은 디자인을 기반으로 한 디자인 스터디를 하는 동아리로, 멘티 · 멘토를 이루어 디자인 툴과 색감, 배치 등 디자인 관련 작업을 하며 학생들의 역량을 키워나가는 동아리입니다. -   주요 활동 내용\n1. 달마다 선정한 주제에 맞게 작품을 제작하고 공유하여 피드백을 주고받는 활동\n2. xd, Adobe Illustrator, Photoshop 등 그래픽 디자인툴 연습3. 공모전 참가\n4. 굿즈 제작\n5. 디자인, 취업 등과 관련된 정보 공유",
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

  let activity = [
    "인수인계식",
    "대신 전해드립니다",
    "롤링페이퍼",
    "동아리발표회",
    "느린우체통",
    "미림 다 모여라",
    "오늘은 일상에서 기부(517)",
    "캠페인",
  ];
  let actexp = [
    "2022년 8월 29일, 31기 학생회에서 32기 학생회의 인수인계식이 시작되었습니다.\n31기 학생회 선배님들, 그리고 선생님들께서 가슴에 배지를 달아주시니 \n그제야 32기 학생회가 되었다는 것이 실감났습니다.\n그리고 막연한 자신감, 부담감 등이 한꺼번에 몰려왔습니다.\n32기 학생회로써 선생님들과 학생들의 의견을 모을 수 있을까, \n이벤트를 잘 이끌어나갈 수 있을까 걱정도 많이 했지만,\n학우분들께서 잘 따라와주시고 참여해주실 거라는 믿음이 있었습니다.",

    "2022년 9월 28일, 학생 소통망 이벤트로 '미림 대신 전해드립니다' SNS 계정을 개설하였습니다.\n학생들의 적극적인 소통으로 활성화를 하기 위해 2022년 11월 8일부터 DM과 댓글로 사연을 받았습니다.\n계정 활성화 결과, 현재 '미림 대신 전해드립니다'의 계정 게시물 수는 약 220여 개에 달하며,\n완료된 답변도 약 600여 개에 달합니다.\n학우들의 적극적인 소통과 전하고 싶은 마음이 하나씩 모여 만들어낸 결과입니다.\n감사합니다.",

    "2022년 12월 19일, 롤링페이퍼 이벤트를 주최하였습니다.\n학년 말이 다가와 이젠 현재의 반 친구들과 헤어져야 하는 시기에, \n반 친구들과 더욱 더 좋은 추억을 남겼으면 하는 바람에 기획한 이벤트였습니다.\n32기 학생회는 편지 형식으로 할지, 색지로 할지 생각하며 어떻게 하면 학우들이 이 이벤트를 좋은 시간으로 남길 수 있을까 고민하였습니다.\n다행히 모든 학생들이 참여해주어 학년 말의 시간을 더욱 기억에 남을 수 있게끔 한 이벤트가 되었습니다.",
    "2022년 12월 21일, 모든 학생들이 기대하던 동아리 발표회 날이 되었습니다.\n사진부의 전시회, 홈카페부의 딸기라테와 망고라테, 학생회의 사진부스 등,\n많고 다양한 동아리들의 활동이 이루어졌습니다.\n1년에 단 한 번 있는 동아리 발표회이니 만큼, 학생들도 열심히 준비를 했습니다.\n학생들이 직접 배치하고 주제를 만들며, 어떻게 이끌어나갈지에 대한 고민했습니다.\n오랜만에 회사에 나간 선배들도 마주하여 반가움을 표출했습니다.\n1년에 단 한 번 있는 축제를 성공적으로 마무리했습니다.",

    "2022년 12월 21일, 동아리 발표회 날과 더불어 느린우체통 이벤트를 기획하였습니다.\n나, 친구, 선후배, 선생님 등에게 보낼 수 있는 편지지만, 조금은 특별하게끔\n2022년 12월에 편지를 쓰면 2023년 3월에 있는 사람에게 편지를 전달하는 이벤트였습니다.\n2022년의 마지막 이벤트였습니다.",
    "2023년 3월 29일, 신입생을 위한 이벤트인 '신입생 다 모여라' 이벤트를 주최했습니다.\n신입생들이 넓은 학교 지리를 외우고 친근하게 느낄 수 있게끔 \n조를 짜 뽑은 장소 앞에서 뽑은 포즈로 사진을 찍어 참여하는 이벤트였습니다.\n또한 선후배끼리의 우애를 더욱 끈끈하게 할 수 있게 2023년 4월 3일, '미림 다 모여라' 이벤트를 주최했습니다.\n3~5인 1조로 선후배끼리 조를 짜 뽑은 장소 앞에서 뽑은 포즈로 사진을 찍어 참여하는 이벤트였습니다.\n 2023년의 첫 이벤트였습니다.",
    "2023년 5월 17일, 기부 이벤트인 '오늘은 일상에서 기부하는 날' 이벤트를 기획하였습니다.\n어떤 금액이든 기부만 한다면 학생회에서 직접 디자인한 배지와, 학교 교포 배지를 전달했습니다.\n또한 SNS 기부 릴레이를 기획해 손으로 숫자 5, 1, 7을 만들어 SNS 게시물 또는 SNS 스토리에 업로드 하였습니다.",
    "2022년 8월부터 2023년 6월까지, \n32기 학생회는 아침 7시 30분부터 8시까지 피켓을 들며 총 8번의 캠페인 활동을 하였습니다.",
  ];

  return (
    // <HashRouter basename={process.env.PUBLIC_URL}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/homeintent" element={<HomeIntent />} />
        <Route
          path="/club/detail/:id"
          element={
            <ClubDetail
              clubs={clubs}
              clubsContent={clubsContent}
              clubsLink={clubsLink}
            />
          }
        />
        <Route
          path="/schoolevent/detail/:id"
          element={<ActivityDetail activity={activity} actexp={actexp} />}
        />
        <Route path="/club" element={<Club clubs={clubs} />} />
        <Route path="/schoolevent" element={<SchEvent activity={activity} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 페이지</h1>} />
      </Routes>
    </Router>
    // </HashRouter>
  );
}

export default App;
