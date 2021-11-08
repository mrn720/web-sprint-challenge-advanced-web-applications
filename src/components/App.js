import React from 'react';
import  {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'
import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {

  return (
    <AppContainer>
      <LambdaHeader/>
      <Header/>
      <RouteContainer>
          <div className="App">
              <Switch> 
                  <Route exact path="/">
                    <Login/>
                  </Route>
                  <Route path ="/login">
                    <Login/>
                  </Route>
                  <PrivateRoute path="/view">
                    <View/>
                  </PrivateRoute>
                  <PrivateRoute path="/logout">
                    <Logout/>
                  </PrivateRoute>
              </Switch>
                </div>

      </RouteContainer>

     </AppContainer>
  )
}

export default App;
//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'
const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`