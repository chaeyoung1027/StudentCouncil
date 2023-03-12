import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeIntent from "./components/pages/HomeIntent";
import Club from "./components/pages/Club";
import ClubDetail from "./components/pages/ClubDetail";
import SchEvent from "./components/pages/SchoolEvent";
import About from "./components/pages/About";

function App() {
  let clubs = [
    "MAS",
    "JS STUDY",
    "D!DA",
    "CPU(C Project with yoU",
    "APP&ME",
    "우친동(우리 친해요 동아리)",
    "게임메이커(Game Maker)",
    "Creative Design",
  ];

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/homeintent" component={HomeIntent} />
        <Route
          path="/club/detail/:id"
          render={() => <ClubDetail clubs={clubs} />}
        />
        <Route path="/club" render={() => <Club clubs={clubs} />} />
        <Route path="/schoolevent" component={SchEvent} />
        <Route path="/about" component={About} />
        <Route path="*" element={<h1>404 페이지</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
