import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Video1206 from "./components/Video1206";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|1_206)">
          <Video1206 card1Props={video1206Data.card1Props} card2Props={video1206Data.card2Props} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const card1Data = {
    text1: "89,935",
    totalUsers: "Total users",
    text2: "10.2",
    x101ThisWeek: "+1.01% this week",
};

const card2Data = {
    text1: "23,283.5",
    totalUsers: "Total reports",
    text2: "3.1",
    x101ThisWeek: "+0.49% this week",
};

const video1206Data = {
    card1Props: card1Data,
    card2Props: card2Data,
};

