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

//Here is the link to the google books api, just replace the search query with the search information
// https://www.googleapis.com/books/v1/volumes?q= SearchQuery
// https://www.googleapis.com/books/v1/volumes?q=     search Query goes here    key=AIzaSyCJD4IgN6wxRRlupNWo03wh7Y_0wWMvEfU
//google api key = AIzaSyCJD4IgN6wxRRlupNWo03wh7Y_0wWMvEfU

//