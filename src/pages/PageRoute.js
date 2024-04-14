import React, { useState, useEffect } from "react";
import APIService from "../components/APIService";
import "./App.css";


const PageRoute = (props) => {
    const [data, setData] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    const insertData = () => {
        APIService.PostData({ data })
            .then((response) => props.insertedData(response))
            .catch(error => console.log('error', error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        insertData();
        setData(
        data.name = "post!",
        data.age = 44,
        data.date = "sfdasfad",
        data.programming = "posted again!");
        
    };

    return(
        <div>
            <h1>PAGE ROUTE</h1>
            
        </div>
    )
}

export default PageRoute;