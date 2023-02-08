import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() =>{
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
    fetch('/people')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])


  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin}/>}/>
        <Route path='/signup' element={<Signup />}/> 
      </Routes>
    </Router>
  );
}

export default App;