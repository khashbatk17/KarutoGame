import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Router,
} from "react-router-dom";
import Field from "./pages/battlefield/field";
import CardList from "./pages/cardlist/cardlist";
import GameStart from "./pages/battlefield/gameStart";

// import Field from "./pages/battlefield/field";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router Basename="/karu_test3">
    <Switch>
      <Route path="/" exact element={<App />} />
      <Route path="/battle" element={<Field />} />
      <Route path="/cardlist" element={<CardList />} />
      <Route path="/gamestart" element={<GameStart />} />
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
