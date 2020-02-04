import React from "react";
import "./styles/base/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// components
import Home from "./views/home/Home";
import Ilustration from "./views/ilustration/Ilustration";
import WebDesign from "./views/webdesign/Webdesign";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar clasname="navbar" />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/ilustration" component={Ilustration} />
          <Route exact path="/webDesign" component={WebDesign} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
