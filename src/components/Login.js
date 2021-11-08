import styled from 'styled-components';
import React, { useState } from 'react';
import {useHistory} from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
  username: "",
  password: ""
}

const Login = () => {
  const [credentials, setCredentials] = useState(initialValues);
  const {push} = useHistory();
  const [errorMessage, setErrorMessage] = useState()

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    if (credentials.username == 'Lambda' && credentials.password == 'School') {
      axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log("Axios Login Push", res)
        localStorage.setItem('token', res.data.token)
        push('/view')
      })
      .catch((err) => {
        console.log({err})
    })}
    else {
      setErrorMessage('Username or Password is not valid.')
      console.log('Incorrect Details')
    }
  }

  return(<ComponentContainer>
    <ModalContainer>
        <h1>Welcome to Blogger Pro</h1>
        <h2>Please enter your account information.</h2>

        <div>
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button onClick={login} id="submit">Log in</button>
    </form>
    <p>{errorMessage}</p>
  </div>

  

    </ModalContainer>
</ComponentContainer>); 
}


export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.
const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`
const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`
const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`
const FormGroup = styled.form`
    padding:1rem;
`
const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`
const Button = styled.button`
    padding:1rem;
    width: 100%;
`