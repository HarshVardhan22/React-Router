import React,{useContext} from "react";

import {DataContext} from "../Context/Context";

import "./Details.css"

const Details = () =>{

    const temp = useContext(DataContext);

    const data = temp.data;
    
    console.log()

    // let date = data["created_at"];

    // date = date.splice(0,9);
    
    
    return(
        <div className = "detailsContainer">

            <h2 > { data.title } </h2>
            
            <h3> Author : { data.author } </h3>

            <h4> Date Created : { data.created_at } </h4>

            <h3> <a href={ data.url }> Visit Website! </a> </h3>

        </div>
    );
}
export default Details;