import React, { useState, useEffect } from "react";
import "./App.css";

function PageRoute(){
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);


    fetch('/add_todo2', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: 'yourValue',
        age: 2345,
        date: 'yourOtherValue',
        programming: 'yourOtherValue',
        })
    })

    return(
        /*
        <div>
            <h1>PAGE ROUTE</h1>
            <p>NAME: {data.name}</p>
            <p>AGE: {data.age}</p>
            <p>DATE: {data.date}</p>
            <p>PROGRAMMING: {data.programming}</p>
        </div>
        */
       <div>POST CHECK</div>
    )
}

export default PageRoute;