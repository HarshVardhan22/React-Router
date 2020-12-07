import React from "react";
import './App.css';
import Nav from "./Components/Nav";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Details from "./Components/Details";


//we can use "as" if we want to customize the name of imported item

function App() {

  return (
   
    <Router>
      <Switch>
       <div className="App">
        <Nav/>
        {/* The homepage denoted by "/" usuallly will be opened by query = about or shop also bcz they also contain "/"  
        therefore to remove this we use the EXACT keyword, so that the homePage will be rendered only when "/" is there in the query*/}
        <Route path = "/" exact component = {HomePage} /> 
        <Route path = "/about" component = {About} />
        <Route path = "/details" exact component = {Details} />
    
       </div>
      </Switch>
    </Router>
    
   
  );
}


export default App;
