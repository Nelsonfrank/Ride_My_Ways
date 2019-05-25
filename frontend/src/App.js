import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import FindRide from "./Components/FindRide";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/FindRide" component={FindRide} />
        <Route path="/SignUp/" component={SignUp} />
        <Route path="/SignIn/" component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
