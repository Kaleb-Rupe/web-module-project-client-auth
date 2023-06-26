import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="login">
          Login.
        </Link>
        <Link className="link" to="friends">
          FriendList.
        </Link>
        <Link className="link" to="/friends/add">
          AddFriend.
        </Link>
        <Link className="link" to="/">
          Logout
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
