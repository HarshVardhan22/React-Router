import React,{createContext,useState} from "react";

export const DataContext = createContext();

export const DataProvider =(props)=>{

    //this "data" contains all the information fetched from the user by input in the variable/state "news"
    const[data,setData] = useState([]);

    const[date,setDate] = useState("");

    return(
        <DataContext.Provider value = {{data,setData,date,setDate}}>
            {props.children}
        </DataContext.Provider>
    );
}