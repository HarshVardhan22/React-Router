import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

//instead of using anchor tags to open a certain link we use Link which accepts one prop i.e. the address of the webpage

const Navbar = () =>{
    return(
        <div className = "nav">
            
            <Link to = "/">
                <div className = "text">InfoCenter</div>
            </Link>
           
            <Link to = "/about">
                <div className = "text">About</div>
            </Link>
        
        </div>
        
    );
} 

export default Navbar;