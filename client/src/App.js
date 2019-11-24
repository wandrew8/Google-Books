import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search/Search";
import Saved from "./components/pages/Saved/Saved";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

