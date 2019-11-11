import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search/Search";
import Saved from "./components/pages/Saved/Saved";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;

