import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = () => {
  return <h2>Login</h2>;
};

const FriendList = () => {
  return <h2>FriendList</h2>;
};

const AddFriend = () => {
  return <h2>AddFriend</h2>;
};

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
