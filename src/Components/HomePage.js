import React,{useState,useEffect,useContext} from "react";
import "./HomePage.css";
import {Link} from "react-router-dom";
import {DataContext} from "../Context/Context";

const HomePage = () =>{
    
    const [news,setNews] = useState([]);

    const [query,setQuery] = useState("random");
    
    const temp = useContext(DataContext);

    const setData = temp.setData;
    
    const fetchItems = async() =>{

        const data = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);

        const jsonData = await data.json();

        setNews(jsonData.hits);
        
    }


    useEffect(() => {
      fetchItems();
      // eslint-disable-next-line
    }, [query]);

    //this method is here to transfer the data of the clicked tile to the state "setData"
    //which is in context so that i could be used in the details.js page
    const dataTransfer = (index) => {
      setData(news[index]);
    };


    return (
      <div>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="container">
          {news.map((value, index) => (
            <div className="news" onClick={(e) => dataTransfer(index)}>
              <Link to="/details">
                <h4>{value.title}</h4>
              </Link>
            </div>
          ))}
        </div>

      </div>
    );
} 

export default HomePage;