import React from "react";
import About from "./About";
import Shop from "./Shop";
import "./Nav.css"

const Navbar = () =>{
    return(
        <div className = "nav">
            <h1>Navbar</h1>
            <About/>
            <Shop/>
            <h3>Navbar Ends</h3>
        </div>
        
    );
} 

export default Navbar;