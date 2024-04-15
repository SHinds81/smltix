import React, { useState, useEffect } from 'react';
import './App.css';
import APIService from '../components/APIService';
import Form from '../components/Form';

const Tute = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const insertArticle = () => {
        APIService.InsertArticle({ title, body })
            .then((response) => props.insertedArticle(response))
            .catch(error => console.log('error', error));
    };

    //ERROR HERE
    const insertedArticle = (article) =>{
        const new_articles = [...articles,article]
        setArticles(new_articles)
      }
      

    const handleSubmit = (event) => {
        event.preventDefault();
        insertArticle();
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h2>Add New Article</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
                <Form insertedArticle={insertedArticle} />
            </form>
        </div>
    );
};

export default Tute;