import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
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
