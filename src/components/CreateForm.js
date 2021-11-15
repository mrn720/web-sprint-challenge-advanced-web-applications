import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialArticle = {
    id:"",
    headline: "",
    author: "",
    summary: "",
    body: ""
};

const CreateForm = (props)=> {
    const [article, setArticle]  = useState(initialArticle);
    const {setCreating, handleCreateCancel} = props;

    const handleChange = (e)=> {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`http://localhost:5000/api/articles/`, article)
            .then(res => {
                console.log(res)
                setCreating(false);
            })
    }


    const handleCancel = (e) => {
        e.preventDefault();
        handleCreateCancel();
    }

    return(<FormContainer onSubmit={handleSubmit}>
        <h3>Edit Article</h3>
        <div>
            <label>Headline</label>
            <input value={article.headline} id="headline" name="headline" onChange={handleChange}/>
        </div>
        <div>
            <label>Author</label>
            <input value={article.author} id="author" name="author" onChange={handleChange}/>
        </div>
        <div>
            <label>Summary</label>
            <input value={article.summary} id="summary" name="summary" onChange={handleChange}/>
        </div>
        <div>
            <label>Body</label>
            <input value={article.body} id="body" name="body" onChange={handleChange}/>
        </div>
        <div>
            <label>ID</label>
            <input value={article.id} id="id" name = "id" onChange={handleChange}/>
        </div>
        <Button id="createButton" onClick = {handleSubmit}>Create Article</Button>
        <Button onClick={handleCancel}>Cancel</Button>
    </FormContainer>);
}

export default CreateForm;

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
    }
`

const Button = styled.button`
    width: 100%;
    padding:1em;
    margin-top: 1em;
`