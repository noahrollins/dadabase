import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/contexts/UserContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyPage from "./components/MyPage";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    fetch("/people")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  function handleLogin(user) {
    setUser(user);
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Landing /></div>} />
        <Route path="/login" element={<div><Login onLogin={handleLogin} /></div>} />
        <Route path="/signup" element={<div><Signup onLogin={handleLogin}/></div>} />
        <Route path="/mypage" element={
          <div className="app-container">
            <Sidebar />
            <MyPage />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
