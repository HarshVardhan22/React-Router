import React,{useState,useEffect} from "react";
import "./HomePage.css";
import {Link} from "react-router-dom"

const HomePage = () =>{

    useEffect(()=>{
        fetchItems()
    },[]);
    
    const [news,setNews] = useState([])

    const fetchItems = async() =>{
        const data = await fetch("https://hn.algolia.com/api/v1/search?query=react");

        const jsonData = await data.json();

        console.log(jsonData)

        setNews(jsonData.hits)

        
    }

    
   
   
    return(
        <div className = "container">
            
                {
                    news.map(value=>(
                        <div className  = "news">
                         <h4> <a href={value.url}>{value.title}</a> </h4>  
                        </div>                   
                    ))                   
                } 
            
        </div>
        
        
    );
} 

export default HomePage;