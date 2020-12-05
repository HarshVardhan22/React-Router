import React from "react";
import About from "./About";

import "./Nav.css";
import {Link} from "react-router-dom";

//instead of using anchor tags to open a certain link we use Link which accepts one prop i.e. the address of the webpage

const Navbar = () =>{
    return(
        <div className = "nav">
            
            <Link to = "/">
                <h1>InfoCenter</h1>
            </Link>
           
            <Link to = "/about">
                <h1>About</h1>
            </Link>
        
        </div>
        
    );
} 

export default Navbar;