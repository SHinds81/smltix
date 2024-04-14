import React, { useState, useEffect } from "react";
import APIService from "../components/APIService";
import "./App.css";


const PageRoute = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [programming, setProgramming] = useState('');

    const insertData = () => {
        APIService.PostData({ name, age, date, programming })
            .then((response) => props.insertedData(response))
            .catch(error => console.log('error', error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        insertData();
        setName('');
        setAge('');
        setDate('');
        setProgramming('');
    };

    return(
        <div>
            <h1>PAGE ROUTE</h1>
        </div>
    )

}

export default PageRoute;