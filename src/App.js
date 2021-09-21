import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Todo from "./Todo";


function App() {
  return (
    <>
  <Router>
    <Link to="/register"><button style={{width:"200px"}}>Register</button></Link>
    
  <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          
        </Switch>
  </Router>
  </>
  );
  
}

export default App;
