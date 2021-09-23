import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Todo from "./Todo";


function App() {
  return (
    <>
  <Router> 
  <Route path="/" component={Home} exact={true} >
            <Home/>
          </Route>
            <Route path="/register"  component={Register} exact={true} >
            <Register/>
            </Route>
  <Switch>
        
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register"  component={Register} exact={true} >
            <Register/>
          </Route>
          
        </Switch>
  </Router>
  </>
  );
  
}

export default App;
