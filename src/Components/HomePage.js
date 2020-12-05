import React,{useState,useEffect} from "react";
import "./HomePage.css";


const HomePage = () =>{
    
    const [news,setNews] = useState([]);

    const [query,setQuery] = useState("random");
    
    const fetchItems = async() =>{
        const data = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);

        const jsonData = await data.json();

        console.log(jsonData)

        setNews(jsonData.hits)

        
    }

    useEffect(()=>{
      
        fetchItems()
        // eslint-disable-next-line
    },[query]);
   
   
    return (
      <div >
        <div >
            <input type="text" value = {query} onChange = {(e)=>setQuery(e.target.value)}/>       
        </div>
        <div  className="container">
          {news.map((value) => (
            <div className="news">
              <h4>           
                <a href={value.url} target="_blank" rel="noreferrer">{value.title}</a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
} 

export default HomePage;