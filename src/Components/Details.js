import React,{useContext} from "react";

import {DataContext} from "../Context/Context";

import "./Details.css";

import {Link} from "react-router-dom";

const Details = () =>{

    const temp = useContext(DataContext);

    const data = temp.data;
    
  const date = temp.date;

    // let date = data["created_at"];

    // date = date.splice(0,9);
    
    
    return(
        <div className = "detailsContainer">

            <h2 > { data.title } </h2>
            
            <h3> Author : { data.author } </h3>

            <h4> Date Created : { date } </h4>

            <h3> <a href={ data.url } target="_blank" target="_blank"> Visit Website! </a> </h3>
            
            <Link to = "/">
            <button> Back </button>
            </Link>
            
        </div>
    );
}
export default Details;