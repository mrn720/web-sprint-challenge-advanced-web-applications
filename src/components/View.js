import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'
import Article from './Article';
import EditForm from './EditForm';
import CreateForm from './CreateForm';

const View = (props) => {
    const [articles, setArticles] = useState([props]);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();
    const [creating, setCreating] = useState(false);
    const {push} = useHistory()

    axiosWithAuth().get('http://localhost:5000/api/articles')
        .then(res => setArticles(res.data))

    const handleDelete = (id) => {

      axiosWithAuth().delete(`http://localhost:5000/api/articles/${id}`)
      .then(res => {
        setArticles(res.data)
        push('/view')
      })
      .catch(err => console.log(err))
    }

    const handleEditSelect = (id) => {
        setEditing(true);
        setEditId(id);
    }
    const handleEditCancel = () =>{
        setEditing(false);
    }

    const handleCreateCancel = () => {
        setCreating(false);
    }

    const handleCreate = () => {
        setCreating(true);
    }

    return(<ComponentContainer>
        <HeaderContainer>View Articles
            <button onClick={handleCreate} >Create Article</button>
        </HeaderContainer>
        <ContentContainer flexDirection="row">
            <ArticleContainer>
                {
                    articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect}/>
                        </ArticleDivider>
                    })
                }
            </ArticleContainer>
            
            {
                editing && <EditForm editId={editId} setEditing={setEditing} handleEditCancel={handleEditCancel}/>
            }
            {
                creating && <CreateForm setCreating={setCreating} handleCreateCancel={handleCreateCancel}/>
            }
        </ContentContainer>
    </ComponentContainer>);
}
export default View;

const Container = styled.div`
    padding: 0.5em;
`
const HeaderContainer = styled.h1`
    border-bottom: solid black 2px;
    padding: 1em;
    margin:0;
    font-size: 1.5em;
    background: black;
    color: white;
`
const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
    padding: 1em;
`
const ComponentContainer = styled.div`
    display:flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
`
const ArticleContainer = styled.div`
    background: grey;
`;